const R = require('ramda');

const db = require('../../models/dbModel2');
const toCamelCase = require('./dbUtils');

const addAPI = async (req, res, next) => {
  const { api, token } = req.body;
  const { rows } = await db.query(
    `
  INSERT INTO public.metrics_server (api, token)
  VALUES ($1, $2)
  ON CONFLICT (api) DO UPDATE SET token = $2 
  `,
    [api, token]
  );
  // no auth for react app, if it passes to next then it is assumed authenticated
  return next();
};

const getAPI = async (req, res, next) => {
  //const { id, api, token } = req.params;
  //const user = await UserRepo.findById(id)
  const { rows } = await db.query(`
  SELECT * 
  FROM public.metrics_server
  LIMIT 1;
  `);
  //big security flaw
  //`SELECT * FROM public.metrics_server WHERE id = ${id};`

  // if(user){
  //   res.send(user);
  // } else {
  //   res.sendStatus(404);
  // }
  try {
    // const parsedRows = toCamelCase(rows)[0];
    // const { api, token } = parsedRows;
    const { api, token } = rows[0];
    res.locals.api = api;
    res.locals.token = token;
    return next();
  } catch (error) {
    console.log('please authenticate with api and token');
  }
};
const addNode = (req, res, next) => {
  const { k8Data } = res.locals;
  R.forEach(function insertk8Data(item) {
    const {
      nodeName,
      nodeUsedCPU,
      nodeUsedMemory,
      podName,
      status,
      timestamp,
      containerName,
      containerCPU,
      containerMemory,
      containerCPUPercent,
      containerMemoryPercent,
    } = item;
    db.query(
      `
  WITH insert_cte AS (
    INSERT INTO public.nodes (node_name, used_cpu, used_memory)
    VALUES ($1, $2, $3)
    ON CONFLICT (node_name) DO NOTHING  
    RETURNING node_id
    )
  SELECT node_id FROM insert_cte
  UNION  ALL
  SELECT node_id FROM public.nodes
  WHERE  node_name = $1
  LIMIT  1;
  `,
      [nodeName, nodeUsedCPU, nodeUsedMemory],
      (err, sqlres) => {
        if (err) return next(err);

        const { node_id } = sqlres.rows[0];

        db.query(
          `
          WITH insert_cte AS (
            INSERT INTO public.pods (node_id, pod_name, tm, pod_status)
            VALUES ($1, $2, date_trunc('minute',$3::TIMESTAMP), $4)
            ON CONFLICT (pod_name, tm) DO NOTHING  
            RETURNING pod_id
            )
          SELECT pod_id FROM insert_cte
          UNION  ALL
          SELECT pod_id FROM public.pods
          WHERE  pod_name = $5
          LIMIT  1;
          `,
          [node_id, podName, timestamp, status, podName],
          (err, sqlres) => {
            if (err) return next(err);

            const { pod_id } = sqlres.rows[0];

            db.query(
              `
          INSERT INTO public.containers (container_name, pod_id, node_id, tm, cpu_used, memory_used, cpu_percent, memory_percent)
          VALUES ($1, $2, $3, date_trunc('minute',$4::TIMESTAMP), $5, $6, $7::NUMERIC (6,3), $8::NUMERIC (6,3))
          ON CONFLICT (container_name, tm) DO NOTHING;
          `,
              [
                containerName,
                pod_id,
                node_id,
                timestamp,
                containerCPU,
                containerMemory,
                containerCPUPercent,
                containerMemoryPercent,
              ],
              (err, sqlres) => {
                if (err) return next(err);

                return next();
              }
            );
          }
        );
      }
    );
  })(k8Data);

  return next();
};

module.exports = {
  addAPI,
  getAPI,
  addNode,
};

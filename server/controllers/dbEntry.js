const db = require("../models/dbmodel.js");
const dbEntry = {};

dbEntry.addAPI = (req, res, next) => {
  const { api, token } = req.body;
  db.query(`
  INSERT INTO public.metrics_server (api, token)
  VALUES ($1, $2)
  ON CONFLICT (api) DO UPDATE SET token = $2;
  `, [api, token], (err, sqlres) => {
    if (err) return next(err);
    return next();
  })
};

dbEntry.getAPI = (req, res, next) => {
  db.query(`
  SELECT * 
  FROM public.metrics_server
  LIMIT 1;
  `, (err, sqlres) => {
    if (err) return next(err);
    if (sqlres.rows.length === 0) {
      return next("empty");
    }
    console.log(sqlres.rows[0]);
    const { api, token } = sqlres.rows[0];
    res.locals.api = api;
    res.locals.token = token;
    return next();
  })
}

dbEntry.addNode = (req, res, next) => {
  const { nodeData } = res.locals;
  const nodes = Object.keys(nodeData);
  nodes.forEach((node) => {
    const nodeInfo = nodeData[node];
    const { usedCPU, usedMemory } = nodeInfo;
    db.query(`
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
    `, [node, usedCPU, usedMemory], (err, sqlres) => {
      if (err) return next(err);
      const node_id = sqlres.rows[0].node_id;
      const { pods } = nodeInfo;
      pods.forEach((pod) => {
        console.log(pod);
        const podName = Object.keys(pod)[0];
        const { status, timestamp, containers } = pod[podName];
        db.query(`
        INSERT INTO public.pods (node_id, pod_name, tm, pod_status)
        VALUES ($1, $2, date_trunc('minute',$3::TIMESTAMP), $4)
        RETURNING pod_id
        `, [node_id, podName, timestamp, status], (err, sqlres) => {
          if (err) return next(err);
          const pod_id = sqlres.rows[0].pod_id;
          const containerNames = Object.keys(containers);
          console.log(pod_id, containerNames)
          containerNames.forEach((containerName) => {
            const { cpuUsed, memoryUsed, cpuPercent, memoryPercent } = containers[containerName];
            db.query(`
            INSERT INTO public.containers (container_name, pod_id, node_id, tm, cpu_used, memory_used, cpu_percent, memory_percent)
            VALUES ($1, $2, $3, date_trunc('minute',$4::TIMESTAMP), $5, $6, $7, $8);
            `, [containerName, pod_id, node_id, timestamp, cpuUsed, memoryUsed, cpuPercent, memoryPercent], (err, sqlres) => {
              if (err) return next(err);
              return next();
            })
          })
          
        })
      })
    })
  })
}

module.exports = dbEntry;
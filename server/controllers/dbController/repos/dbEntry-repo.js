const R = require('ramda');
const pool =
  process.env.NODE_ENV === 'test'
    ? require('../../../models/testDbModel')
    : require('../../../models/dbmodel');
const toCamelCase = require('../dbUtils/dbUtils');

function DbEntryRepo() {
  DbEntryRepo.prototype.addAPI = async function addAPI(api, token) {
    const { rows } = await pool.query(
      `
        INSERT INTO metrics_server (api, token)
        VALUES ($1, $2)
        ON CONFLICT (api) DO UPDATE SET token = $2
        `,
      [api, token]
    );
    // return toCamelCase(rows)[0];
  };

  DbEntryRepo.prototype.getAPI = async function getAPI() {
    const { rows } = await pool.query(`SELECT * 
      FROM metrics_server ;
      `);

    return toCamelCase(rows)[0];
    //return rows[0];
  };
  DbEntryRepo.prototype.count = async function count() {
    const { rows } = await pool.query(' SELECT COUNT(*) FROM metrics_server;');
    return parseInt(rows[0].count);
  };
  DbEntryRepo.prototype.countNodes = async function count() {
    const { rows } = await pool.query(' SELECT COUNT(*) FROM nodes;');
    return parseInt(rows[0].count);
  };

  DbEntryRepo.prototype.addNode = async function addNode(item) {
    const { nodeName, nodeUsedCPU, nodeUsedMemory } = item;
    const { rows } = await pool.query(
      `
    WITH insert_cte AS (
      INSERT INTO nodes (node_name, used_cpu, used_memory)
      VALUES ($1, $2, $3)
      ON CONFLICT (node_name) DO NOTHING
      RETURNING node_id
      )
    SELECT node_id FROM insert_cte
    UNION  ALL
    SELECT node_id FROM nodes
    WHERE  node_name = $1
    LIMIT  1;
    `,
      [nodeName, nodeUsedCPU, nodeUsedMemory]
    );
    const { nodeId } = toCamelCase(rows)[0];
    //const { nodeId } = rows[0];
    return nodeId;
  };
  DbEntryRepo.prototype.countPods = async function count() {
    const { rows } = await pool.query(' SELECT COUNT(*) FROM pods;');
    return parseInt(rows[0].count);
  };
  DbEntryRepo.prototype.curriedAddPod = R.curryN(2, async function addPod(
    nodeId,
    item
  ) {
    const { podName, status, timestamp } = item;
    const { rows } = await pool.query(
      `
    WITH insert_cte AS (
      INSERT INTO pods (node_id, pod_name, tm, pod_status)
      VALUES ($1, $2, date_trunc('minute',$3::TIMESTAMP), $4)
      ON CONFLICT (pod_name, tm) DO NOTHING
      RETURNING pod_id
      )
    SELECT pod_id FROM insert_cte
    UNION  ALL
    SELECT pod_id FROM pods
    WHERE  pod_name = $5
    LIMIT  1;
    `,
      [nodeId, podName, timestamp, status, podName]
    );
    const { podId } = toCamelCase(rows)[0];
    // const { podId } = rows[0];
    return podId;
  });
  DbEntryRepo.prototype.countContainers = async function count() {
    const { rows } = await pool.query(' SELECT COUNT(*) FROM containers;');
    return parseInt(rows[0].count);
  };
  DbEntryRepo.prototype.curriedAddContainer = R.curryN(
    3,
    async function addContainer(nodeId, podId, item) {
      const {
        timestamp,
        containerName,
        containerCPU,
        containerMemory,
        containerCPUPercent,
        containerMemoryPercent,
      } = item;
      const { rows } = await pool.query(
        `
INSERT INTO containers (container_name, pod_id, node_id, tm, cpu_used, memory_used, cpu_percent, memory_percent)
VALUES ($1, $2, $3, date_trunc('minute',$4::TIMESTAMP), $5, $6, $7::NUMERIC (6,3), $8::NUMERIC (6,3))
ON CONFLICT (container_name, tm) DO NOTHING ;
`,
        [
          containerName,
          podId,
          nodeId,
          timestamp,
          containerCPU,
          containerMemory,
          containerCPUPercent,
          containerMemoryPercent,
        ]
      );
      return toCamelCase(rows)[0];
      //return rows[0];
    }
  );
}

module.exports = new DbEntryRepo();

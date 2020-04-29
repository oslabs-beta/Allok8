const db = require("../models/dbmodel.js");
const dbGet = {};

dbGet.dbInformation = (req, res, next) => {
  db.query(`
  SELECT *
  FROM public.containers as c
  JOIN public.pods as p on p.pod_id = c.pod_id
  JOIN public.nodes as n on n.node_id = p.node_id
  ORDER BY c.tm desc;
  `, (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.dbResults = results;
    return next();
  })
}
dbGet.architecture = (req, res, next) => {
  db.query(`
  SELECT DISTINCT node_name, container_name, pod_name
  FROM public.containers as c
  JOIN public.pods as p on p.pod_id = c.pod_id
  JOIN public.nodes as n on n.node_id = p.node_id
  `, (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.dbResults = results;
    return next();
  })
}
dbGet.containerDB = (req, res, next) => {
  const { containerName } = req.body;
  db.query(`
  SELECT *
  FROM public.containers as c
  WHERE c.container_name = $1
  ORDER BY c.tm ASC;
  `,[containerName], (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.containerResults = results;
    return next();
  })
}
dbGet.nodeDB = (req, res, next) => {
  const { nodeName } = req.body;
  db.query(`
  SELECT *
  FROM public.containers as c
  JOIN public.nodes as n 
    ON n.node_id = c.node_id
  WHERE n.node_name = $1
  ORDER BY c.tm ASC;
  `, [nodeName], (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.containerResults = results;
    return next();
  })
}
dbGet.podDB = (req, res, next) => {
  const { podName } = req.body;
  db.query(`
  SELECT * 
  FROM public.containers as c
  JOIN public.pods as p
    ON p.pod_id = c.pod_id
  WHERE p.pod_name = $1
  ORDER BY c.tm ASC;
  `, [podName], (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.containerResults = results;
    return next();
  })
}
dbGet.formatBubbleInfo = (req, res, next) => {
  const data = {};
  const { db }
}
dbGet.formatContainerInfo = (req, res, next) => {
  const { mode } = req.body;
  const { containerResults } = res.locals;
  const output = [];
  for (let i = 0; i < containerResults.length; i ++) {
    const dataPoint = containerResults[i];

    const { container_name, tm } = dataPoint;
    const dataModeVal = dataPoint[mode];
    let containerIndex = dbGet.findIndex(output, "id", container_name);
    let containerInfo;
    if (containerIndex === -1) {
      containerInfo = {
        id: container_name,
        data: []
      }
      output.push(containerInfo);
    }
    else {
      containerInfo = output[containerIndex];
    }
    containerInfo.data.push({
      x: tm,
      y: dataModeVal
    })
  }
  res.locals.containerInfo = output;
  return next();
}

dbGet.findIndex = (array, key, val) => {
  for (let i = 0; i < array.length; i ++) {
    if (JSON.stringify(array[i][key]) === JSON.stringify(val)) {
      return i;
    }
  }
  return -1;
}
dbGet.overview = (req, res, next) => {
  const { dbResults } = res.locals;
  const overview = [];
  dbResults.forEach((info) => {
    const nodeName = info.node_name;
    const containerName = info.container_name;
    const podName = info.pod_name;

    let nodeInfo;
    let nodeIndex = dbGet.findIndex(overview, "node", nodeName);
    if (nodeIndex === -1 ) {
      nodeInfo = {
        "node": nodeName,
        "pods": []
      };
      nodeIndex = overview.length;
      overview.push(nodeInfo);
    }
    else {
      nodeInfo = overview[nodeIndex];
    }
    let podIndex = dbGet.findIndex(nodeInfo.pods, "pod", podName);
    let podInfo;
    if (podIndex === -1) {
      podInfo = {
        "pod": podName,
        "containers": []
      };
      podIndex = nodeInfo.pods.length;
      nodeInfo.pods.push(podInfo);
    }
    else {
      podInfo = nodeInfo.pods[podIndex];
    }
    podInfo.containers.push(containerName);
  });
  res.locals.clusterOverview = overview;
  return next();
}
dbGet.cleanOutput = (req, res, next) => {
  const { dbResults } = res.locals;
  const cleanedOutput = [];
  dbResults.forEach((info) => {

    const nodeName = info.node_name;
    const containerName = info.container_name;
    const podName = info.pod_name;
    
    const usedMemory = info.used_memory;
    const usedCPU = info.used_cpu;
    const timestamp = info.tm;
    const status = info.status;

    const cpuUsed = info.cpu_used;
    const memoryUsed = info.memory_used;
    const cpuPercent = info.cpu_percent;
    const memoryPercent = info.memory_percent;

    let objInfo;
    let timeIndex = dbGet.findIndex(cleanedOutput, "time", timestamp);
    if (timeIndex === -1 ) {
      objInfo = {
        "time": timestamp,
        "nodes": []
      };
      timeIndex = cleanedOutput.length;
      cleanedOutput.push(objInfo);
    }
    else {
      objInfo = cleanedOutput[timeIndex];
    }
    let nodeIndex = dbGet.findIndex(objInfo.nodes, "id", nodeName);
    let nodeInfo;
    if (nodeIndex === -1) {
      nodeInfo = {
        "id": nodeName,
        "pods": []
      };
      nodeIndex = objInfo.nodes.length;
      objInfo.nodes.push(nodeInfo);
    }
    else {
      nodeInfo = objInfo.nodes[nodeIndex];
    }

    let podIndex = dbGet.findIndex(objInfo.nodes[nodeIndex].pods, "id", podName);
    let podInfo;
    if (podIndex === -1) {
      podInfo = {
        "id": podName,
        "containers": []
      };
      podIndex = objInfo.nodes[nodeIndex].pods.length;
      objInfo.nodes[nodeIndex].pods.push(podInfo);
    }
    else {
      podInfo = objInfo.nodes[nodeIndex].pods[podIndex];
    }

    const containerInfo = {
      id: containerName,
      cpuUsed: cpuUsed,
      memoryUsed: memoryUsed,
      memoryPercent: memoryPercent,
      cpuPercent: cpuPercent
    }
    podInfo.containers.push(containerInfo);
  });
  res.locals.cleanedOutput = cleanedOutput;
  return next();
}

// dbGet.orderOuput = (req, res, next) => {
//   const cleanedOutput = res.locals.cleanedOutput;
//   const timestamps = Object.keys(cleanedOutput);
//   console.log(timestamps)
//   timestamps.forEach((tm) => {
//     const nodes = Object.keys(cleanedOutput[tm]);
//     nodes.forEach((node) => {
//       const pods = Object.keys(cleanedOutput[tm][node].pods);
//       pods.sort();
//       cleanedOutput[tm][node].sortedPods = pods;
//       cleanedOutput[tm][node].sortedContainers = [];
//       pods.forEach((pod) => {
//         const containers = Object.keys(cleanedOutput[tm][node].pods[pod].containers);
//         cleanedOutput[tm][node].sortedContainers = cleanedOutput[tm][node].sortedContainers.concat(containers);
//       })
//       cleanedOutput[tm][node].sortedContainers = [... new Set(cleanedOutput[tm][node].sortedContainers)];
//     })
//   })
//   res.locals.orderedOutput = cleanedOutput;
//   return next();
// }
module.exports = dbGet;
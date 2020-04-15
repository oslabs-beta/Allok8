const cleaner = {};

cleaner.getNodes = (req, res, next) => {
  const {nodeInfo} = res.locals;
  const nodes = nodeInfo.nodeNameArray;
  res.locals.nodes = nodes; //array of nodes;
  return next();
}
cleaner.nodeMetrics = (req, res, next) => {
  const {nodeInfo} = res.locals;
  const nodeMetricsRaw = nodeInfo.nodeMetricsRaw;
  const nodeMetricsFormat = {};
  for (let i = 0; i < res.locals.nodes.length; i++) {
    const nodeName = res.locals.nodes[i];
    // console.log(nodeMetricsRaw[nodeName]);
    const {capacity, allocatable, nodeUsage, pods} = nodeMetricsRaw[nodeName];
    nodeMetricsFormat[nodeName] = {
      capacity,
      allocatable,
      nodeUsage,
      pods
    };
  }
  res.locals.nodeMetricsFormat = nodeMetricsFormat;
  return next();
}
// const convertUnits = (dataString) => {
//   const type = dataString.slice(-1);
//   let converted;
//   if (type === 'i') {
//     const data = dataString.slice(0,-2);
//     //Ei, Pi, Ti, Gi, Mi, Ki
//     const memEnd = dataString.slice(-2);
//     switch (memEnd) {
//       case "Ei":
//         converted = 1;
//       case "Pi":
//         converted = 1;
//       case "Ti":
//         converted = 1;
//       case "Gi":
//         converted = 1;
//       case "Mi":
//         converted = 1;
//       default: //Ki
//         converted = parseInt(data, 10)*1024;
//     }
//   }
//   return converted;
// }
const podMetrics = (pod, usedCPU, usedMemory) => {
  usedCPU = parseInt(usedCPU.slice(0,-1),10);
  usedMemory = parseInt(usedMemory.slice(0,-2),10);
  const formattedPod = {};
  const { podUsage, status, spec } = pod;
  const { containers, metadata } = podUsage;
  const podName = metadata.name;
  formattedPod[podName] = {
    status: status.phase,
    timestamp: podUsage.timestamp,
    containers: {},
  };
  for (let i = 0; i < containers.length; i++) {
    const containerName = containers[i].name;
    const {cpu, memory} = containers[i].usage;
    formattedPod[podName].containers[containerName] = {
      cpuUsed: cpu,
      memoryUsed: memory,
      cpuPercent: parseInt(cpu.slice(0,-1),10)/usedCPU * 100,
      memoryPercent: parseInt(memory.slice(0,-2),10)/usedMemory * 100
    };


  }
  for (let i = 0; i < spec.containers.length; i ++) {
    const containerName = spec.containers[i].name;
    const cpuRequested = spec.containers[i].resources.requests.cpu;
    formattedPod[podName].containers[containerName].cpuRequested = cpuRequested;
  }
  return formattedPod;
}
cleaner.podClean = (req, res, next) => {
  const { nodeMetricsFormat } = res.locals;
  const nodes = Object.keys(nodeMetricsFormat);
  const nodeData = {};
  for (let i = 0; i < nodes.length; i++) {
    const nodeName = nodes[i];
    nodeData[nodeName] = {};

    const { nodeUsage, allocatable } = nodeMetricsFormat[nodeName];
    nodeData[nodeName].allocatableMemory = allocatable.memory;
    nodeData[nodeName].allocatableCPU = allocatable.cpu;
    nodeData[nodeName].usedCPU = nodeUsage.usage.cpu;
    nodeData[nodeName].usedMemory = nodeUsage.usage.memory;

    nodeData[nodeName].pods = [];
    const pods = nodeMetricsFormat[nodeName].pods; //this is an array of pods
    for (let j = 0; j < pods.length; j++) {
      const podData = podMetrics(pods[j], nodeData[nodeName].usedCPU, nodeData[nodeName].usedMemory);
      nodeData[nodeName].pods.push(podData);
    }
  }


  res.locals.nodeData = nodeData;
  return next();
}
module.exports = cleaner;
const R = require('ramda');
// reducers written to avoid increasing time complexity of reduce({... spread}) pattern
/*
 *************initial nodeReducers and business logic
 */
function nodeInfoReducer(newObj, item) {
  newObj.push({
    nodeName: item['metadata']['name'],
    allocatableMemory: item['status']['allocatable']['memory'],
    allocatableCPU: item['status']['allocatable']['cpu'],
    capacity: item['status']['capacity'],
    [item['metadata']['name']]: [],
  });
  return newObj;
}
function nodeUsageReducer(newObj, item) {
  newObj.push({
    nodeName: item['metadata']['name'],
    usedMemory: parseInt(item['usage']['memory'].slice(0, -2), 10),
    usedCPU: parseInt(item['usage']['cpu'].slice(0, -1), 10),
  });
  return newObj;
}
/*
 *************initial podReducers only include running Pods
 */
function podsUsageReducer(newObj, item) {
  newObj.push({
    podName: item.metadata.name,
    namespace: item.metadata.namespace,
    timestamp: item.timestamp,
    containers: item.containers,
  });
  return newObj;
}
function podsInfoReducer(newObj, item) {
  item.status.phase === 'Running' &&
    newObj.push({
      podName: item.metadata.name,
      nodeName: item.spec.nodeName,
      status: item.status.phase,
      specContainers: item.spec.containers,
    });
  return newObj;
}
/*
 *************pod containers reducers
 */
// container and specContainer functionality separate because both contain their own unique nested array of objects
function specContainerReducer(newObj, item) {
  const { status, namespace, timestamp } = item;
  newObj.push(
    R.reduce(
      function sPInnerReducer(specContainer, eachSpecContainer) {
        specContainer.push({
          nodeName: item.nodeName,
          podName: item.podName,
          status: status,
          namespace: namespace,
          timestamp: timestamp,
          containerName: eachSpecContainer.name,
          // fix: terenary operator for containers that have empty resource object throws undefined error
          cpuRequested: eachSpecContainer.resources.requests
            ? eachSpecContainer.resources.requests.cpu
            : -1,
        });
        return specContainer;
      },
      [],
      item.specContainers
    )
  );

  return newObj;
}

function containerReducer(newObj, item) {
  newObj.push(
    R.reduce(
      function cpuMemoryReducer(containers, eachContainer) {
        containers.push({
          nodeName: item.nodeName,
          podName: item.podName,
          containerName: eachContainer.name,
          containerCPU: eachContainer.usage.cpu,
          containerMemory: eachContainer.usage.memory,
          cpuPercent: -1,
          memoryPercent: -1,
        });
        return containers;
      },
      [],
      item.containers
    )
  );
  return newObj;
}
/*
 *************formatting reducer to remove nodes without pods or containers
 */
function cleanUpReducer2(newObj, item) {
  newObj.push({
    nodeName: item['nodeName'],

    usedMemory: item['usedMemory'],
    usedCPU: item['usedCPU'],
    allocatableMemory: item['allocatableMemory'],
    allocatableCPU: item['allocatableCPU'],
    capacity: item['capacity'],
    containers: item[item.nodeName],
  });
  return newObj;
}
/*
 *************computation functions for percentReducer
 */
const parseCPUPercent = R.curryN(2, function parseCPUPercent(
  usedCPUValue,
  containerCPU
) {
  return (parseInt(containerCPU.slice(0, -1), 10) / usedCPUValue) * 100;
});
const parseMemoryPercent = R.curryN(2, function parseMemoryPercent(
  usedMemoryValue,
  containerMemory
) {
  return (parseInt(containerMemory.slice(0, -2), 10) / usedMemoryValue) * 100;
});
/*
 *************formatting reducer to apply business logic and final formatting
 */
// applying business logic at this step because nodeData(usedCPU and usedMemory) was only available after merging nodes to pods
function percentReducer(newObj, item) {
  const {
    usedCPU,
    usedMemory,
    allocatableMemory,
    allocatableCPU,
    capacity,
  } = item;

  newObj.push(
    R.reduce(
      function cpuMemoryPercentReducer(containers, eachContainer) {
        containers.push({
          nodeName: eachContainer.nodeName,
          nodeUsedCPU: usedCPU,
          nodeUsedMemory: usedMemory,
          nodeAllocatableMemory: allocatableMemory,
          nodeAllocatableCPU: allocatableCPU,
          nodeCapacity: capacity,
          podName: eachContainer.podName,
          namespace: eachContainer.namespace,
          cpuRequested: eachContainer.cpuRequested,
          status: eachContainer.status,
          timestamp: eachContainer.timestamp,
          containerName: eachContainer.containerName,
          containerCPU:
            parseInt(eachContainer.containerCPU.slice(0, -1), 10) || 0,
          containerMemory: parseInt(
            eachContainer.containerMemory.slice(0, -2),
            10
          ),
          containerCPUPercent:
            parseCPUPercent(usedCPU, eachContainer.containerCPU) || 0,
          containerMemoryPercent: parseMemoryPercent(
            usedMemory,
            eachContainer.containerMemory
          ),
        });

        return containers;
      },
      [],
      item.containers
    )
  );

  return newObj;
}

/*
 *************nodesData grouping, reducing, and merging functionality
 */

function groupNodeInfoByNodeName(arrayOfObjs) {
  return R.pipe(
    R.reduce(nodeInfoReducer, []),
    R.groupBy(R.prop('nodeName'))
  )(arrayOfObjs);
}

const nodeGroupReducer = R.curryN(3, function nodeGroupReducer(
  nodeGrouping,
  newObj,
  item
) {
  newObj.push(R.merge(item, nodeGrouping[item.nodeName][0]));
  return newObj;
});

function mergeNodeInfoAndUsage(nodeInfo, nodeUsage) {
  return R.pipe(
    R.reduce(nodeUsageReducer, []),
    R.reduce(nodeGroupReducer(groupNodeInfoByNodeName(nodeInfo)), [])
  )(nodeUsage);
}

/*
 *************podsData grouping, reducing, and merging functionality
 */
// final pod merging functionality: mergePodInfoAndUsage2
function groupPodsInfoByPodName(arrayOfObjs) {
  return R.pipe(
    R.reduce(podsInfoReducer, []),
    R.groupBy(R.prop('podName'))
  )(arrayOfObjs);
}

const podGroupReducer = R.curryN(3, function podGroupReducer(
  podGrouping,
  newObj,
  item
) {
  newObj.push(R.merge(item, podGrouping[item.podName][0]));
  return newObj;
});

/*
 *************podsContainersData grouping, reducing, and merging functionality
 */
// container and specContainer functionality separate because both contain their own unique nested array of objects
// final pod merging functionality: mergePodInfoAndUsage2
function reducedPodContainers(arrayOfObjs) {
  return R.pipe(R.reduce(containerReducer, []), R.flatten)(arrayOfObjs);
}

function reducedPodSpecContainers(arrayOfObjs) {
  return R.pipe(R.reduce(specContainerReducer, []), R.flatten)(arrayOfObjs);
}

function groupSpecContainersByContainerName(arrayOfObjs) {
  return R.groupBy(R.prop('containerName'))(arrayOfObjs);
}

const containerGroupReducer = R.curryN(3, function containerGroupReducer(
  containerGrouping,
  newObj,
  item
) {
  newObj.push(R.merge(item, containerGrouping[item.containerName][0]));
  return newObj;
});

function mergePodContainers(specContainers, containers) {
  return R.reduce(
    containerGroupReducer(groupSpecContainersByContainerName(specContainers)),
    []
  )(containers);
}
/*
 *************podsAndNodesData grouping, reducing, and merging functionality
 */

function groupContainersByNodeName(arrayOfObjs) {
  return R.groupBy(R.prop('nodeName'))(arrayOfObjs);
}
const containerGroupReducer2 = R.curryN(3, function containerGroupReducer2(
  nodeGrouping,
  newObj,
  item
) {
  newObj.push(
    R.mergeDeepWithKey(
      function key(k, l, r) {
        return k === nodeGrouping[item.nodeName] ? R.concat(l, r) : r;
      },
      item,
      nodeGrouping
    )
  );
  return newObj;
});
function mergePodInfoAndUsage(podInfo, podUsage) {
  return R.pipe(
    R.reduce(podsUsageReducer, []),
    R.reduce(podGroupReducer(groupPodsInfoByPodName(podInfo)), []),
    R.converge(mergePodContainers, [
      reducedPodSpecContainers,
      reducedPodContainers,
    ])
  )(podUsage);
}

function mergePodsAndNodes(nodes, containers) {
  return R.pipe(
    R.reduce(containerGroupReducer2(groupContainersByNodeName(containers)), []),

    R.reduce(cleanUpReducer2, []),

    R.reduce(percentReducer, []),

    R.flatten
  )(nodes);
}

module.exports = {
  nodeUsageReducer,
  nodeInfoReducer,
  podsInfoReducer,
  podsUsageReducer,
  specContainerReducer,
  containerReducer,
  cleanUpReducer2,
  percentReducer,
  mergeNodeInfoAndUsage,
  mergePodsAndNodes,
  mergePodInfoAndUsage,
};

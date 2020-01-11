const cmd = require('node-cmd');

const k8 = {};

k8.getNodeInfo = (req, res, next) => {
  // todo switch from body to using cookies, I think
  const { api, token } = req.body;
  cmd.get(
    `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`,
    (err, data, stderr) => {
      // error handle if needed
      if (err) {
        // console.log('hitting error in curl', err);
        return next(err);
      }
      const obj = JSON.parse(data);
      const numOfNodes = obj.items.length;
      const nodeNameArray = [];
      const nodeMetricsRaw = {};
      // console.log(obj.items)
      // loop through nodes
      obj.items.forEach((item) => {
        // and add each node to an array
        nodeNameArray.push(item.metadata.name);
        // keep track of each nodes usage metrics in an object
        nodeMetricsRaw[item.metadata.name] = item.status;
      });
      res.locals.nodeInfo = {
        nodeNameArray,
        nodeMetricsRaw,
      };

      return next();
    },
  );
};


k8.getPodInfo = (req, res, next) => {
  // todo switch from body to using cookies, I think
  const { api, token } = req.body;
  //! hard coded for now
  const namespace = 'default';
  cmd.get(
    `curl https://${api}/api/v1/namespaces/${namespace}/pods?limit=500 --header "Authorization: Bearer ${token}" --insecure`,
    (err, data, stderr) => {
      // error handle if needed
      if (err) {
        return next(err);
      }
      const obj = JSON.parse(data);
      const podNameArray = [];
      const podInfo = {};
      // todo swap this to use object.keys to iterate instead of a for in

      // ? there is definitely a better way to do this we will need to revisit how this object looks together

      for (const i in obj.items)
      // make sure pod is on current node
      {
        if (obj.items[i].metadata.namespace === `${namespace}`) {
        // push to an array of pod names
          podNameArray.push(obj.items[i].metadata.name);
          // keep track of each pod in an object
          podInfo[obj.items[i].metadata.name] = obj.items[i];
        }
      }
   
      res.locals.podsInfo = {
        podInfo,
        podNameArray,
      };

      // console.log('THIS IS POD INFO ', podInfo)
      return next();
    },
  );
};

k8.getNodesUsage = (req, res, next) => {
  // todo switch from body to using cookies, I think
  const { api, token } = req.body;
  //! hard coded for now
  cmd.get(
    `curl https://${api}/apis/metrics.k8s.io/v1beta1/nodes --header "Authorization: Bearer ${token}" --insecure`,
    (err, data, stderr) => {
      // error handle if needed
      if (err) {
        return next(err);
      }
      // console.log('HELLLO ', JSON.parse(data));
      res.locals.nodeUsage = JSON.parse(data);
      // console.log('THIS IS USAGE ', JSON.parse(data).items);

      return next();
    },
  );
};

k8.getPodsUsage = (req, res, next) => {
  // todo switch from body to using cookies, I think
  const { api, token } = req.body;
  //! hard coded for now
  const namespace = 'default';
  cmd.get(
    `curl https://${api}/apis/metrics.k8s.io/v1beta1/namespaces/${namespace}/pods --header "Authorization: Bearer ${token}" --insecure`,
    (err, data, stderr) => {
      // error handle if needed
      if (err) {
        return next(err);
      }
      res.locals.podUsage = JSON.parse(data);

      // console.log('THIS IS USAGE ', obj.items);

      return next();
    },
  );
};

k8.structureData = (req, res, next) => {
  const { podUsage, nodeUsage, podsInfo, nodeInfo } = res.locals;
  const nodeKeys = Object.keys(nodeInfo.nodeMetricsRaw);


  /////BAHRAM>......

  Object.keys(nodeInfo.nodeMetricsRaw).forEach(nodeName => {

    nodeUsage.items.forEach(eachNode => {
      // console.log('THIS IS EACH METADATA ', eachNode.metadata)
      if (eachNode.metadata.name === nodeName) {
        nodeInfo.nodeMetricsRaw[nodeName]['nodeUsage'] = eachNode
      }
    })


    Object.keys(podsInfo.podInfo).forEach(podName => {
      const currNodeName = podsInfo.podInfo[podName].spec.nodeName;

      podUsage.items.forEach(eachPod => {

        if (eachPod.metadata.name === podName) {
          podsInfo.podInfo[podName]['podUsage'] = eachPod
        }
      })

      if (nodeName === currNodeName) {
        nodeInfo.nodeMetricsRaw[nodeName]['pods'] = podsInfo.podInfo[podName]
      }
    
  })
  })
  return next()
}


module.exports = k8;

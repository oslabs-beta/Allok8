const cmd = require('node-cmd');

const k8 = {};

k8.getNodeInfo = (req, res, next) => {
  // todo switch from body to using cookies, I think
  const { api, token } = req.body;
  cmd.get(
    `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`,
    function(err, data, stderr){
      //error handle if needed
      if (err) {
        return next(err);
      }
        const obj = JSON.parse(data);
        const numOfNodes = obj.items.length;
        const nodeNameArray = [];
        const nodeMetricsRaw = {};
        // console.log(obj.items)
        //loop through nodes 
        obj.items.forEach(item => {
          //and add each node to an array
          nodeNameArray.push(item.metadata.name);
          //keep track of each nodes usage metrics in an object
          nodeMetricsRaw[item.metadata.name] = item.status
        })
        res.locals.nodeInfo = {
          nodeNameArray,
          nodeMetricsRaw
        };
        // console.log(nodeNameArray)
        // console.log(nodeMetricsRaw)
        // console.log('the current number of nodes is: ', numOfNodes) 
        return next();
        
    }
  )
  
}

k8.getPodInfo = (req, res, next) => {
  // todo switch from body to using cookies, I think
  const { api, token } = req.body;
  //! hard coded for now
  const namespace = 'default';
  cmd.get(
    `curl https://${api}/api/v1/namespaces/${namespace}/pods?limit=500 --header "Authorization: Bearer ${token}" --insecure`,
    function(err, data, stderr){
      //error handle if needed
      if (err) {
        return next(err);
      }
      const obj = JSON.parse(data);
      const podNameArray = [];
      const podInfo = {};
      const containerInfo = {};
      // todo swap this to use object.keys to iterate instead of a for in

      //? there is definitely a better way to do this we will need to revisit how this object looks together

      for (let i in obj.items) 
      //make sure pod is on current node
        if (obj.items[i].metadata.namespace === `${namespace}`) {
          //push to an array of pod names
          podNameArray.push(obj.items[i].metadata.name);
          //keep track of each pod in an object
          podInfo[obj.items[i].metadata.name] = obj.items[i]
        }
      //creates an object that has the information for the containers in the pod as key,value pairs by pod
      podNameArray.forEach(pod => containerInfo[pod] = podInfo[pod].spec.containers )
      // console.log(containerInfo)
      res.locals.containerInfo = {
        containerInfo,
        podInfo,
        podNameArray
      }
      return next();
    }
  )
}

module.exports = k8;

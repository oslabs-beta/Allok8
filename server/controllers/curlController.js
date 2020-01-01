const cmd = require('node-cmd');

const k8 = {};

k8.getNodeInfo = (req, res, next) => {
  // todo switch from body to using cookies, I think
  const { api, token } = req.body;
  cmd.get(
    `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`,
    function(err, data, stderr){
        const obj = JSON.parse(data);
        const numOfNodes = obj.items.length;
        const nodeNameArray = [];
        const nodeMetricsRaw = {};
        // console.log(obj.items)
        obj.items.forEach(item => {
          nodeNameArray.push(item.metadata.name);
          nodeMetricsRaw[item.metadata.name] = item.status
        })
        // console.log(nodeNameArray)
        // console.log(nodeMetricsRaw)
        // console.log('the current number of nodes is: ', numOfNodes) 
        
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
      const obj = JSON.parse(data);
      const podNameArray = [];
      const podInfo = {};
      const containerInfo = {};
      for (let i in obj.items) 
        if (obj.items[i].metadata.namespace === `${namespace}`) {
          podNameArray.push(obj.items[i].metadata.name);
          podInfo[obj.items[i].metadata.name] = obj.items[i]
        }
      podNameArray.forEach(pod => containerInfo[pod] = podInfo[pod].spec.containers )
      // console.log(containerInfo)
    }
  )
}

module.exports = k8;

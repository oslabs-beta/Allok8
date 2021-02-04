const {
  mergeNodeInfoAndUsage,
  mergePodsAndNodes,
  mergePodInfoAndUsage,
} = require('./reducers/reducers');

const formatData = async (req, res, next) => {
  const { nodesInfo, nodesUsage, podsInfo, podsUsage } = res.locals;
  res.locals = {
    ...res.locals,
    k8Data: await mergePodsAndNodes(
      await mergeNodeInfoAndUsage(nodesInfo.items, nodesUsage.items),
      await mergePodInfoAndUsage(podsInfo.items, podsUsage.items)
    ),
  };
  return next();
};

module.exports = {
  formatData,
};

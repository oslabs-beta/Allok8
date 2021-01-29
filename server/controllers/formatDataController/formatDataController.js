const {
  mergeNodeInfoAndUsage,
  mergePodsAndNodes,
  mergePodInfoAndUsage,
} = require('./reducers/reducers');

const formatData = (req, res, next) => {
  const { nodesInfo, nodesUsage, podsInfo, podsUsage } = res.locals;

  res.locals = {
    ...res.locals,
    k8Data: mergePodsAndNodes(
      mergeNodeInfoAndUsage(nodesInfo.items, nodesUsage.items),
      mergePodInfoAndUsage(podsInfo.items, podsUsage.items)
    ),
  };
  return next();
};

module.exports = {
  formatData,
};

const {
  mergeNodeInfoAndUsage,
  mergePodsAndNodes,
  mergePodInfoAndUsage,
} = require('./reducers/reducers');

const formatData = async (req, res, next) => {
  const { nodesInfo, nodesUsage, podsInfo, podsUsage } = res.locals;

  const nodeData = await mergeNodeInfoAndUsage(
    nodesInfo.items,
    nodesUsage.items
  );

  const podData = await mergePodInfoAndUsage(podsInfo.items, podsUsage.items);

  // bug fix mergePodsAndNodes executing before podData and nodeData were done, this caused an error in function groupContainersByNodeName line 265 of reducers.js.  typeError: could not groupby undefined
  const k8Data = await mergePodsAndNodes(nodeData, podData);

  res.locals = {
    ...res.locals,
    k8Data,
  };
  return next();
};

module.exports = {
  formatData,
};

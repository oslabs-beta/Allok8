const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { getStream } = require('./curlUtils');

const getNodesInfo = async (req, res, next) => {
  const { getNodesInfoStr } = res.locals;
  res.locals = {
    ...res.locals,
    nodesInfo: await getStream(getNodesInfoStr, exec),
  };
  return next();
};

const getPodsInfo = async (req, res, next) => {
  const { getPodsInfoStr } = res.locals;
  res.locals = {
    ...res.locals,
    podsInfo: await getStream(getPodsInfoStr, exec),
  };
  return next();
};

const getNodesUsage = async (req, res, next) => {
  const { getNodesUsageStr } = res.locals;
  res.locals = {
    ...res.locals,
    nodesUsage: await getStream(getNodesUsageStr, exec),
  };
  return next();
};

const getPodsUsage = async (req, res, next) => {
  const { getPodsUsageStr } = res.locals;
  res.locals = {
    ...res.locals,
    podsUsage: await getStream(getPodsUsageStr, exec),
  };
  return next();
};

module.exports = {
  getNodesInfo,
  getPodsInfo,
  getNodesUsage,
  getPodsUsage,
};

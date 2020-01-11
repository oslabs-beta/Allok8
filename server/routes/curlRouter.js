const express = require('express');

const { getNodesUsage, getPodsUsage, getNodeInfo, getPodInfo, structureData } = require('../controllers/curlController');

const curlRouter = express.Router();

curlRouter.post('/getInfo', getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, (req, res) => {
  res.locals.all = {
    nodeInfo: res.locals.nodeInfo,
    podInfo: res.locals.podInfo
  }
  res.status(200).json(res.locals.all);
});

module.exports = curlRouter;

const express = require('express');

const { getNodesUsage, getPodsUsage, getNodeInfo, getPodInfo, structureData } = require('../controllers/curlController');
const cleaner = require("../controllers/apiclean");

const curlRouter = express.Router();

curlRouter.post('/getInfo', getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, (req, res) => {
  res.locals.all = {
    nodeInfo: res.locals.nodeInfo,
  }
  return res.status(200).json(res.locals.all);
});
curlRouter.post('/dev', getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, cleaner.getNodes, cleaner.nodeMetrics, cleaner.podClean,(req, res) => {
  res.locals.all = {
    nodes: res.locals.nodes,
    nodeMetrics: res.locals.nodeMetricsFormat,
    nodeData: res.locals.nodeData
  }
  return res.status(200).json(res.locals.nodeData);
});


module.exports = curlRouter;

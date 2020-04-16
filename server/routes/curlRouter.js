const express = require('express');

const { getNodesUsage, getPodsUsage, getNodeInfo, getPodInfo, structureData } = require('../controllers/curlController');
const cleaner = require("../controllers/apiclean");
const dbEntry = require("../controllers/dbEntry");
const dbGet = require("../controllers/dbGet");

const curlRouter = express.Router();

curlRouter.post('/getInfo', getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, dbEntry.addAPI,(req, res, next) => {
  res.locals.all = {
    nodeInfo: res.locals.nodeInfo,
  }
  return res.status(200).json(res.locals.all);
});
curlRouter.get('/dev', dbEntry.getAPI, getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, 
                cleaner.getNodes, cleaner.nodeMetrics, cleaner.podClean, dbEntry.addNode, (req, res) => {
  // res.locals.all = {
  //   nodes: res.locals.nodes,
  //   nodeMetrics: res.locals.nodeMetricsFormat,
  //   nodeData: res.locals.nodeData
  // }
  return res.status(200).json(res.locals.nodeData);
});
curlRouter.get('/dbInfo', dbGet.dbInformation, dbGet.cleanOutput, dbGet.orderOuput, (req, res) => {
  return res.status(200).json(res.locals.orderedOutput);
})


module.exports = curlRouter;

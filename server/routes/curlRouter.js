const express = require('express');

const { commandStrings } = require('../controllers/cmdStrController');
const {
  getNodesUsage,
  getPodsUsage,
  getNodesInfo,
  getPodsInfo,
} = require('../controllers/curlController/curlController');
const {
  formatData,
} = require('../controllers/formatDataController/formatDataController');
const {
  addAPI,
  getAPI,
  addNode,
} = require('../controllers/dbController/dbEntry.js');
const dbGet = require('../controllers/dbController/dbGet');

const curlRouter = express.Router();

curlRouter.post(
  '/getInfo',
  commandStrings,
  getPodsUsage,
  getNodesUsage,
  getPodsInfo,
  getNodesInfo,
  formatData,
  addAPI,
  (req, res, next) => res.status(200).json(res.locals.k8Data)
);

curlRouter.get(
  '/dev',
  getAPI,
  commandStrings,
  getPodsUsage,
  getNodesUsage,
  getPodsInfo,
  getNodesInfo,
  formatData,
  addNode,
  (req, res) => res.status(200).json(res.locals.k8Data)
);
curlRouter.get('/overview', dbGet.architecture, dbGet.overview, (req, res) => {
  return res.status(200).json(res.locals.clusterOverview);
});
curlRouter.get(
  '/dbInfo',
  dbGet.dbInformation,
  dbGet.cleanOutput,
  (req, res) => {
    return res.status(200).json(res.locals.dbResults);
  }
);
curlRouter.post(
  '/node',
  dbGet.nodeDB,
  dbGet.formatContainerInfo,
  (req, res) => {
    return res.status(200).json(res.locals.containerInfo);
  }
);
curlRouter.post('/pod', dbGet.podDB, dbGet.formatContainerInfo, (req, res) => {
  return res.status(200).json(res.locals.containerInfo);
});
curlRouter.post(
  '/container',
  dbGet.containerDB,
  dbGet.formatContainerInfo,
  (req, res) => {
    return res.status(200).json(res.locals.containerInfo);
  }
);

module.exports = curlRouter;

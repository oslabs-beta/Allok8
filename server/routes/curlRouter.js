const express = require('express');

const { getNodeInfo, getPodInfo } = require('../controllers/curlController');

const curlRouter = express.Router();

curlRouter.post('/getInfo', getNodeInfo, getPodInfo, (req, res) => {
  res.locals.all = {
    nodeInfo: res.locals.nodeInfo,
    podInfo: res.locals.containerInfo
  }
  res.status(200).json(res.locals.all);
});

module.exports = curlRouter;

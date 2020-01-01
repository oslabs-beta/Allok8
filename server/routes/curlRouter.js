const express = require('express');

const { getNodeInfo } = require('../controllers/curlController');

const curlRouter = express.Router();

curlRouter.post('/getInfo', getNodeInfo, (req, res) => {
  res.json('example');
});

module.exports = curlRouter;

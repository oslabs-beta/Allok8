const express = require('express');

const { xController } = require('../controllers/xController');

const xRouter = express.Router();

xRouter.get('/', xController, (req, res) => {
  res.json('example');
});

module.exports = xRouter;

/* eslint-disable no-console */
const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');

const curlRouter = require('./routes/curlRouter.js');

module.exports = () => {
  const app = express();

  // statically serve everything in the dist folder on the route '/dist'
  app.use('/', express.static(path.join(__dirname, '../dist')));
  // app.use(express.static('dist'));

  // parse incoming request body
  app.use(bodyParser.json());

  app.get('/local', (req, res) => {
    const architecture = fs.readFileSync(
      path.resolve(__dirname, './clusterArchitecture.json'),
      'utf8'
    );
    return res.status(200).json(architecture);
  });

  // route handlers
  app.use('/server', curlRouter);
  // polling
  setInterval(() => {
    fetch('http://localhost:3000/server/dev')
      .then((result) => result.json())
      .then((json) => console.log('server.js:31 : ', json));
  }, 10000);

  // workaround for npm build not working
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, '../client/index.html'));
  });

  // global error handler
  app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };

    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.message);
    console.log(err);
    return res.status(errorObj.status).json(errorObj.message);
  });

  return app;
};

const express = require('express');

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();
const path = require('path');
const curlRouter = require('./routes/curlRouter.js');
const fetch = require("node-fetch");
const fs = require("fs");

// statically serve everything in the dist folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get("/test", (req, res) => {
  console.log("hello");
  return res.status(200).json({"hi": "there"});
})
//parse incoming request body
app.use(bodyParser.json());


app.get("/local", (req, res) => {
  const architecture = fs.readFileSync(path.resolve(__dirname, "./clusterArchitecture.json"),"utf8");
  return res.status(200).json(architecture);
})

//route handlers
app.use('/server', curlRouter);

setInterval(() => {
  fetch("http://localhost:3000/server/dev")
  .then(result => result.json())
  .then(json => console.log(json))
}, 10000);


// // catch-all route handler for any requests to an unknown route
// app.get('*', (req, res) => {
//   console.log(res.status);
//   return res.status(404).json('Page not found');
// });
// root, send index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
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


app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));
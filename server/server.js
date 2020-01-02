const express = require('express');

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();
const path = require('path');
const curlRouter = require('./routes/curlRouter.js');
// const xRouter = require('./routes/x');


// const xRouter = require('./routes/x');

// HARDCODED APISERVER / TOKEN / NAMESPACES
// const apiServer = '35.236.202.52';
// const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tZ3cybDkiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImRlOWZmMjI4LTJiZWItMTFlYS04MWFlLTQyMDEwYTk2MGZkZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.f371sW2bePkV3L5fdQLptzqWRUTLdZsZeTWgX4Fdr4bV2ZvBI-53UNv-o3rPZ-5tKDxX-eT-1JLIGpuIUvd6VV3odsMJnQs9kCd18SV-ksZf1acdqIccEgyISGga9D9E4lv7Fd3iIJIFbIB68eOZvHi28Z9klyjd4FTLD9tMbsC7hidcfBMAGziwoudBbPE2qz9clMkT-Sa3iNDxwRhmpzcVtSolHsKfTGuOiXYw1Low33lXPEix3vruo6OXXh06vue22f5_A8iFTCYyL_FbogNBKxNuXNHYcPYltomZHCnpvITEqt-AveO7NjFH6sJpSdL6TENlpytIseE5WtQ1jg';
// const namespace = 'default';


// statically serve everything in the dist folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../dist')));


//parse incoming request body
app.use(bodyParser.json());


// root, send index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});


//route handlers
app.use('/server', curlRouter);


// catch-all route handler for any requests to an unknown route
app.all('*', (req, res) => res.status(404).send('Page not found'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));

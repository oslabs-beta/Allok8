const express = require('express');

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();
const path = require('path');

// const xRouter = require('./routes/x');


// const xRouter = require('./routes/x');

// app.use(bodyParser.json());

// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// root, send index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});


//example template on how we can use req.body or req.cookies to make our requests
// app.get('/getInfo', (req, res, next) => {
//   const { url, token } = req.body;
//   cmd.get(
//   `curl ${url} --header "Authorization: Bearer ${token}" --insecure`
//   )
// }, (req, res) => {
//   res.send('INFO WE WANT')
// })


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

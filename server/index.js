/* eslint-disable no-console */
const app = require('./server.js');
const testPool = require('./models/testDbModel');

const PORT = 3000;
// if run dbTests, enable local dbTests(check dbTest files), connect to testDB, otherwise dbTests fail
if (process.env.NODE_ENV === 'test') {
  testPool
    .connect({
      host: 'localhost',
      port: 5432,
      database: 'allok8-test',
      user: 'justingillespie',
      password: '',
    })
    .then(() => {
      app().listen(3005, () => {
        console.log('Listening on port 3005');
      });
    })
    .catch((err) => console.error(err));
} else {
  app().listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

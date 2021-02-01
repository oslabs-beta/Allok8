const app = require('./server.js');
const pool = require('./pool');

const PORT = 3000;

pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'justingillespie',
    password: '',
  })

  .then(() => {
    app().listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

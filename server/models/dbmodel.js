const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    process.env.PG_URI || 'postgres://postgres:postgres@postgres/postgres',
});

module.exports = {
  query: (text, params, callback) => {
    console.log(`Executed query: ${text}`);
    return pool.query(text, params, callback);
  },
};

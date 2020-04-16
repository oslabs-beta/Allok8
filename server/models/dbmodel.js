const { Pool } = require("pg");

// const TEST_URI = "postgres://pscvcobi:rkm3nojS6zognbFZJ-JnLkhcOzXm3J0i@drona.db.elephantsql.com:5432/pscvcobi";
const TEST_URI = "postgres://postgres:postgres@192.168.99.100:31061/postgres";
const PG_URI = TEST_URI;//process.env.NODE_ENV === 'test' ? TEST_URI : GEN_URI;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log(`Executed query: ${text}`);
    return pool.query(text, params, callback);
  }
};

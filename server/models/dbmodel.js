const { Pool } = require("pg");

const TEST_URI = "postgres://pscvcobi:rkm3nojS6zognbFZJ-JnLkhcOzXm3J0i@drona.db.elephantsql.com:5432/pscvcobi";
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

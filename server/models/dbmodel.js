const { Pool } = require("pg");

// const TEST_URI = "postgres://pscvcobi:rkm3nojS6zognbFZJ-JnLkhcOzXm3J0i@drona.db.elephantsql.com:5432/pscvcobi";
const TEST_URI = "postgres://postgres:postgres@192.168.99.100:31398/postgres";
const PG_URI = TEST_URI;//process.env.NODE_ENV === 'test' ? TEST_URI : GEN_URI;

const pool = new Pool({
  //this is alec i put this here for testing
  connectionString: "postgres://postgres:postgres@192.168.99.100:30712/postgres",
});

module.exports = {
  query: (text, params, callback) => {
    console.log(`Executed query: ${text}`);
    return pool.query(text, params, callback);
  },
};

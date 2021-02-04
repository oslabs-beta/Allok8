const pg = require('pg');

// written in this format allows test of multiple databases in parallel

class Pool {
  _pool = null;

  connect(options) {
    this._pool = new pg.Pool(options);
    return this._pool.query('SELECT 1 + 1;');
  }
  close() {
    // return this._pool.end()
    return this._pool.end(() => {});
  }

  query(sql, params) {
    return this._pool.query(sql, params);
  }
}

module.exports = new Pool();

module.exports = (env) => ({
  // exclude: /node_modules/,
  // may need to disable babel for db testing
  // TODO: check version of @babel/preset-env covers class static methods
  /* 
  {
    "presets": ["@babel/preset-react"]
  }
  // removed "@babel/preset-env" from presets and tests db tests ran before I was getting
  SyntaxError: /Users/justingillespie/Github/cs/projects/Allok8/server/pool.js: Missing class properties transform.
  4 | 
  5 | class Pool {
  > 6 |   _pool = null;
    |   ^^^^^^^^^^^^^
  7 | 
  8 |   connect(options) {
  9 |     this._pool = new pg.Pool(options);
  */
});

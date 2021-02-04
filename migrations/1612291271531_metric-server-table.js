/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE metrics_server (
    api VARCHAR NOT NULL UNIQUE,
    token VARCHAR NOT NULL
)
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
  DROP TABLE metric_server;`);
};

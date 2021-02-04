/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE pods (
    pod_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    node_id INT REFERENCES nodes (node_id),
    pod_name VARCHAR NOT NULL,
    tm TIMESTAMP NOT NULL,
    pod_status VARCHAR NOT NULL,
    UNIQUE (pod_name, tm)
);`);
};

exports.down = (pgm) => {
  pgm.sql(`
  DROP TABLE pods;`);
};

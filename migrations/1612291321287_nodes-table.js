/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE nodes (
    node_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    node_name VARCHAR NOT NULL UNIQUE,
    used_cpu VARCHAR,
    used_memory VARCHAR
);`);
};

exports.down = (pgm) => {
  pgm.sql(`
  DROP TABLE nodes;`);
};

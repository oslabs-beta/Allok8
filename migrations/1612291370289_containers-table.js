/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  //   pgm.sql(`
  //   CREATE TABLE containers (
  //     container_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  //     container_name VARCHAR NOT NULL,
  //     pod_id INT REFERENCES pods (pod_id),
  //     --pod_name VARCHAR NOT NULL,
  //     node_id INT REFERENCES nodes (node_id),
  //     --node_name VARCHAR NOT NULL,
  //     tm TIMESTAMP NOT NULL,
  //     cpu_used VARCHAR,
  //     memory_used VARCHAR,
  //     cpu_percent NUMERIC (6,3),
  //     memory_percent NUMERIC (6,3),
  //     UNIQUE (pod_name, tm)
  // );`);
};

exports.down = (pgm) => {
  // pgm.sql(`
  // DROP TABLE containers
  // ;`);
};

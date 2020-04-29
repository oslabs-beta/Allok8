CREATE TABLE public.metrics_server (
      api VARCHAR NOT NULL UNIQUE,
      token VARCHAR NOT NULL
);
CREATE TABLE public.nodes (
      node_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      node_name VARCHAR NOT NULL UNIQUE,
      used_cpu VARCHAR,
      used_memory VARCHAR
);
CREATE TABLE public.pods (
      pod_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      node_id INT REFERENCES public.nodes (node_id),
      pod_name VARCHAR NOT NULL,
      tm TIMESTAMP NOT NULL,
      pod_status VARCHAR NOT NULL,
      UNIQUE (pod_name, tm)
);
CREATE TABLE public.containers (
      container_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      container_name VARCHAR NOT NULL,
      pod_id INT REFERENCES public.pods (pod_id),
      --pod_name VARCHAR NOT NULL,
      node_id INT REFERENCES public.nodes (node_id),
      --node_name VARCHAR NOT NULL,
      tm TIMESTAMP NOT NULL,
      cpu_used VARCHAR,
      memory_used VARCHAR,
      cpu_percent NUMERIC (6,3),
      memory_percent NUMERIC (6,3),
      UNIQUE (pod_name, tm)

);


/*
volumes:
      - ./db.sql:/docker-entrypoint-initdb.d/db.sql
      - ./postgres-data:/var/lib/postgresql/data
*/

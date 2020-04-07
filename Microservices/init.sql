CREATE TABLE public.users (
      user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      username VARCHAR NOT NULL,
      password VARCHAR NOT NULL
);
/*
volumes:
      - ./db.sql:/docker-entrypoint-initdb.d/db.sql
      - ./postgres-data:/var/lib/postgresql/data
*/
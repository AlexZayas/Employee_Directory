/** 
PostgreSQL Database
*/

/**
Create DB tables and constraints model below then 
invoke psql -d <url from elephantSQL> -f employee_directory_create.sql
*/

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.employee (
	"_id" serial NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
    "picture"  bytea NOT NULL,
	"job_title" varchar NOT NULL,
	"department" varchar NOT NULL,
	"start_date" DATE NOT NULL,
	"phone_number" varchar NOT NULL,
	"email" varchar NOT NULL,
	"location" varchar NOT NULL,
	CONSTRAINT "employee_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

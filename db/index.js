/*
This file:
  • imports the postgres module
  • creates and exports the query function used to communicate with the database using dotenv for database credentials
*/


import pg from "pg";
import 'dotenv/config';

export const pool = new pg.Pool({
  PGUSER: process.env.PGUSER,
  PGDATABASE: process.env.PGDATABASE,
  PGHOST: process.env.PGHOST,
  PGPORT: process.env.PGPORT,
  PGPASSWORD: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: false
  }
})

export function query(text, params, callback) {
  return pool.query(text, params, callback)
};
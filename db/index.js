/*This file:
  • imports the postgres module
  • makes and exports the query function
*/


import pg from "pg";
// const { pool } = pg.Pool;
// import Pool from 'pg'.Pool';
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
/*This file:
  • imports the postgres module
  • makes and exports the query function
*/


import pg from "pg";

export const pool = new pg.Pool({
  PGUSER: process.env.USER,
  PGDATABASE: process.env.DATABASE,
  PGHOST: process.env.HOST,
  PGPORT: process.env.PORT,
  PGPASSWORD: process.env.PASSWORD,
  ssl: { rejectUnauthorized: false
  }
})

export function query(text, params, callback) {
  return pool.query(text, params, callback)
};
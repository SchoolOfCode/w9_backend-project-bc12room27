/* 
This file:
• contains routes for interacting with the data stored on the database
• query function queries the database on heroku - query interacts with pool to interact with database and return pool.query

notes routes currently not conneted to front end

*/

import express from 'express';
import { pool } from "../db/index.js"
import { query } from "../db/index.js";

const router = express.Router();

//-------------------
//Topics Data Requests
  //using /api path as specified in app.js


router.get('/', async(req, res, next) => {
  const data = await pool.query(`SELECT * FROM topics;`)
  res.send({
    success: true,
    payload: data.rows})
})

router.get('/resources', async(req, res, next) => {
  const data = await pool.query(`SELECT * FROM resources;`)
  res.send({
    success: true,
    payload: data.rows})
})


//-------------------
// Notes Table Routes

//POST request to Notes Table
router.post('/notes', async(req, res, next) => {
  try {
    const { inputNote } = req.body;
    const newNote = await pool.query(`INSERT INTO notes (note) VALUES($1) RETURNING *;`, [inputNote]
    );
    res.json(newNote);
  } catch (err) {
    console.error(err.message);
  }
})





export default router;

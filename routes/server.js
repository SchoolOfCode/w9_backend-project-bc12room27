/* This file:
• will contain the routers

• create router instance \/
• export router \/

• to interact with database in Heroku, will have to write SQL queries
  write as if normal then use sql strings?

  single page interface so only need one routers folder?
  need to use pool at some point
  pool.query(`SQL String Goes Here`)
const res = await pool.query(sql string request)

*/
import express from 'express';
import { pool } from "../db/index.js"

//use query function to query the database on heroku - query interacts with pool to interact with database and return pool.query
import { query } from "../db/index.js";

const router = express.Router();

// app.use(express.json()); //req.body
//Get value of search bar from front end, store in variable, and use as search - will look something like this / not sure if correct
// let searched = document.getElementById("searchBar").target.value;
//req.body for post notes

//select area on page where data is rendered - this will either hold data that user requested when successfully sent back from server, or an error message
// let responseArea = document.getElementById("box");


//Topics Data Requests
//using /api path
//GET REQUEST
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

//async function getAllData() {
//   const response = await fetch('/api');
//   return await response.json()
// };

//not sure about .rows!
// router.get('/', (req, res) => {
  // try {
  //   const searched = req.params;
  //   const found = pool.query(`SELECT * FROM topics WHERE topic = $1;`, [searched])

  //   res.json(found.rows)
  // } catch (err) {

//   }
// })


//Notes Table Routes

//POST request to Notes Table
// router.post('/notes', async(req, res, next) => {
//   try {
//     const { inputNote } = req.body;
//     const newNote = await pool.query(`INSERT INTO notes (note) VALUES($1) RETURNING *;`, [inputNote]
//     );
//     res.json(newNote);
//   } catch (err) {
//     console.error(err.message);
//   }
// })





export default router;

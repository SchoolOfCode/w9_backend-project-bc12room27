/* This file:
• will contain the routers for the topics table

• to interact with database in Heroku, will have to write SQL queries
  write as if normal then use sql strings?

  single page interface so only need one routers folder?
  need to use pool at some point

  pool.query(`SQL String Goes Here`)

const res = await pool.query(sql string request)

*/
import express from 'express';
import { pool } from "../db/index.js";

const router = express.Router();
const pool = new Pool();

//Get value of search bar from front end, store in variable, and use as search - will look something like this / not sure if correct
let searched = document.getElementById("searchBar").target.value;

//select area on page where data is rendered - this will either hold data that user requested when successfully sent back from server, or an error message
let responseArea = document.getElementById("box");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





export default router;

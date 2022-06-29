/*
This file:
• imports and instantiates express and other middleware
• defines routing url ('/api') for server routers in the routes folder
• defines PORT and an alternative port value
• when run, sets server running and listening on defined port
 */

import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import router from './routes/server.js'

const PORT = process.env.PORT || "3000";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors())


app.get("/", function (req, res) {
  res.render("index", { title: "Project Week!" });
});

app.use("/api", router);


app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
import express from 'express';
import logger from 'morgan';
import router from './routes/server.js'
import cors from 'cors';


const PORT = process.env.PORT || "3000";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors())


/* serves front-end */
app.get("/", function (req, res) {
  res.render("index", { title: "Project Week!" });
});

app.use("/api", router);


app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
import express from 'express';
import logger from 'morgan';
import router from './routes/index.js'


const PORT = process.env.PORT || "3000";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));


//Components

// import DaySection from '../w9_frontend-project-bc12room27/src/Main/DaySection/DaySection';

/* serves front-end */
app.get("/", function (req, res) {
  res.render("index", { title: "Project Week!" });
});

app.use("/project", router);

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
/*
JS script to populate the 'topics' table on the Heroku database
Query communicates with the Heroku database using dotenv and database credentials
 */

import { query } from "../../index.js"
import { topics } from "../../data/data.js";

const populateTopicsSqlString = "INSERT INTO topics (topic, subtopic, weektopic, summary, syntax, complete, week, day) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);";


async function populateTopicsTables() {
  for (let i = 0; i<topics.length; i++) {
    const res = await query(populateTopicsSqlString, [
      topics[i].topic, 
      topics[i].subtopic,
      topics[i].weektopic,
      topics[i].summary, 
      topics[i].syntax,
      topics[i].complete, 
      topics[i].week, 
      topics[i].day
        ]
      );
    }
  console.log("Table populated with Topics");
};

populateTopicsTables();

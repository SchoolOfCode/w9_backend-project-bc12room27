import { query } from "../index";
import { topics, notes, resources } from "../data/data.js";

const populateTopicsSqlString = "INSERT INTO topics (title, summary, complete, week, day) VALUES ($1, $2, $3, $4, $5);";

const populateResourcesSqlString = "INSERT INTO resources (title, resource) VALUES ($1, $2);";

const populateNotesSqlString = "INSERT INTO notes (title,note) VALUES ($1, $2);";

async function populateTopicsTables() {
  for (let i = 0; i<topics.length; i++) {
    const res = await query(populateTopicsSqlString, [
      topics[i].title, 
      topics[i].summary, 
      topics[i].complete, 
      topics[i].week, 
      topics[i].day
        ]
      );
      console.log("Table populated with Topics");
  }
};

async function populateResourcesTables() {
  for (let i = 0; i<topics.length; i++) {
    const res = await query(populateResourcesSqlString, [
        resources[i].title, 
        resources[i].resource
      ]
      );
      console.log("Table populated with Resources");
  }
};

//need to populate with notes if user going to populate?
// async function populateNotesTables() {
//   for (let i = 0; i<topics.length; i++) {
//     const res = await query(populateNotesSqlString, [
//       notes[i].title, 
//       notes[i].note
//     ]
//     );
//     console.log("Table populated with Notes");

//   }
// }


// populateTopicsTables();
// populateResourcesTables();
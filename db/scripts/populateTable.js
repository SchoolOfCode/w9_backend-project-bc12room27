import { query } from "../index.js"
import { topics, notes, resources } from "../data/data.js";

const populateTopicsSqlString = "INSERT INTO topics (topic, subtopic, weektopic, summary, syntax, complete, week, day) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);";

// WHERE NOT EXISTS ( SELECT id FROM topics WHERE topics.id  = topics.id)

const populateResourcesSqlString = "INSERT INTO resources (title, resource) VALUES ($1, $2);";

const populateNotesSqlString = "INSERT INTO notes (title,note) VALUES ($1, $2);";

// async function populateTopicsTables() {
//   for (let i = 0; i<topics.length; i++) {
//     const res = await query(populateTopicsSqlString, [
//       topics[i].topic, 
//       topics[i].subtopic,
//       topics[i].weektopic,
//       topics[i].summary, 
//       topics[i].syntax,
//       topics[i].complete, 
//       topics[i].week, 
//       topics[i].day
//         ]
//       );
//       console.log("Table populated with Topics");
//   }
// };

async function populateResourcesTable() {
  for (let i = 0; i<resources.length; i++) {
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
populateResourcesTable();
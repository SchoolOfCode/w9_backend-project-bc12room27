/*
JS script to populate the 'resources' table on the Heroku database
Query communicates with the Heroku database using dotenv and database credentials
 */

import { query } from "../../index.js"
import { resources } from "../../data/data.js";

const populateResourcesSqlString = "INSERT INTO resources (title, resource) VALUES ($1, $2);";

async function populateResourcesTable() {
  for (let i = 0; i<resources.length; i++) {
    const res = await query(populateResourcesSqlString, [
        resources[i].title, 
        resources[i].resource
        ]
      );
    }
  console.log("Table populated with Resources");
};

populateResourcesTable();
/*
This file:
Creates the tables on the Heroku database 
Tables already created - only needs to be called once (do not call again!)
Script for calling this file is in package.json

Uses query function to interact with database credentials as environment variables using dotenv package.
 */

import { query } from "../index.js";

const topicsSqlString = "CREATE TABLE IF NOT EXISTS topics (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, topic VARCHAR(255), subtopic VARCHAR(255), weektopic VARCHAR(255), summary TEXT, syntax TEXT, complete BOOL, week INT, day INT);";

const resourcesSqlString = "CREATE TABLE IF NOT EXISTS resources (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, title VARCHAR(255), resource VARCHAR(255));";

const notesSqlString = "CREATE TABLE IF NOT EXISTS notes (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, note TEXT);";


async function createTopicTable() {
  const res = await query(topicsSqlString);
  console.log("Sucesss: Topic Table Created");
};

async function createResourcesTable() {
  const res = await query(resourcesSqlString);
  console.log("Success: Resources Table Created");
};

async function createNotesTable() {
  const res = await query(notesSqlString);
  console.log("Success: Notes Table Created");
};


createTopicTable();
createResourcesTable();
createNotesTable();
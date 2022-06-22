import { query } from "../index.js";

const deleteTopicsSqlString = `DELETE FROM topics;`;

async function deleteTopicsData() {
  const res = await query(deleteTopicsSqlString);
  console.log("Success: All Topics Data Deleted");
};

async function deleteResourcesData() {
  const res = await query(deleteTopicsSqlString);
  console.log("Success: All Topics Data Deleted");
};

deleteTopicsData();
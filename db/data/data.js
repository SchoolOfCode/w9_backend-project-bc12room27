// const data = {
//   topic: {
//       summary: 'string of summary',
//       date: {
//           week: 1,
//           day: 1,
//         },
//       complete: false,
//       resources: [
//           "resource1",
//           "resource2"
//       ],
//       notes: 'string of notes',
//     },
//   };

  //better to separate tables to create relational data which can be joined
  //

/*
data setup  
export const topics = [
   {
    topic: "title string",
    subtopic: "",
    summary: "summary string",
    complete: false,
    week: 1,
    day: 1,
    }, 
    {
    topic: "title string",
    subtopic: "",
    summary: "summary string",
    complete: false,
    week: 1,
    day: 1,
    },
    {
      topic: "title string",
      subtopic: "",
      summary: "summary string",
      complete: false,
      week: 1,
      day: 1,
      }
  ]
  */

  export const topics = [
     {
     topic: "Databases",
     subtopic: "Relational Databases",
     summary: "A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the database.",
     syntax: "",
     complete: false,
     week: 5,
     day: 1,
     },
     {
      topic: "Databases",
      subtopic: "Non-Relational Databases",
      summary: "A non-relational database is a database that does not use the tabular schema of rows and columns found in most traditional database systems. Instead, non-relational databases use a storage model that is optimized for the specific requirements of the type of data being stored.",
      syntax: "",
      complete: false,
      week: 5,
      day: 1,
      },
      {
      topic: "SQL",
      subtopic: "SQL Syntax",
      summary: "The semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.",
      syntax: "",
      complete: false,
      week: 5,
      day: 1,
      }, 
      {
      topic: "SQL",
      subtopic: "WHERE Clause",
      summary: "The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.",
      syntax: "SELECT * FROM {column} WHERE {condition}",
      complete: false,
      week: 5,
      day: 1,
      }, 
      {
      topic: "SQL",
      subtopic: "INSERT INTO Statement",
      summary: "The INSERT INTO statement is used to insert new records in a table.",
      syntax: "INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...); OR INSERT INTO table_name VALUES (value1, value2, value3, ...);",
      complete: false,
      week: 5,
      day: 1,
      },
      {
      topic: "SQL",
      subtopic: "UPDATE Statement",
      summary: "The UPDATE statement is used to modify the existing records in a table.",
      syntax: "UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
      complete: false,
      week: 5,
      day: 1,
      },
   ]
 

  

  export const notes = {
    title: "note title",
    note: "",
  }

  export const resources = {
    title: "resourceName",
    resource: "resource"
  }


  
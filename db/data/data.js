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


  //ADD WEEK TOPICS

// check that summary or syntax is unique

  export const topics = [
    //  {
    //  topic: "Databases",
    //  subtopic: "Relational Databases",
    //  weektopic: "Databases, SQL, Postgres",
    //  summary: "A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the database.",
    //  syntax: "",
    //  complete: false,
    //  week: 5,
    //  day: 1,
    //  },
    //  {
    //   topic: "Databases",
    //   subtopic: "Non-Relational Databases",
    //   weektopic: "Databases, SQL, Postgres",
    //   summary: "A non-relational database is a database that does not use the tabular schema of rows and columns found in most traditional database systems. Instead, non-relational databases use a storage model that is optimized for the specific requirements of the type of data being stored.",
    //   syntax: "",
    //   complete: false,
    //   week: 5,
    //   day: 1,
    //   },
    //   {
    //   topic: "SQL",
    //   subtopic: "SQL Syntax",
    //   weektopic: "Databases, SQL, Postgres",
    //   summary: "The semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.",
    //   syntax: "",
    //   complete: false,
    //   week: 5,
    //   day: 1,
    //   }, 
    //   {
    //   topic: "SQL",
    //   subtopic: "WHERE Clause",
    //   weektopic: "Databases, SQL, Postgres",
    //   summary: "The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.",
    //   syntax: "SELECT * FROM {column} WHERE {condition}",
    //   complete: false,
    //   week: 5,
    //   day: 1,
    //   }, 
    //   {
    //   topic: "SQL",
    //   subtopic: "INSERT INTO Statement",
    //   weektopic: "Databases, SQL, Postgres",
    //   summary: "The INSERT INTO statement is used to insert new records in a table.",
    //   syntax: "INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...); OR INSERT INTO table_name VALUES (value1, value2, value3, ...);",
    //   complete: false,
    //   week: 5,
    //   day: 1,
    //   },
    //   {
    //   topic: "SQL",
    //   subtopic: "UPDATE Statement",
    //   weektopic: "Databases, SQL, Postgres",
    //   summary: "The UPDATE statement is used to modify the existing records in a table.",
    //   syntax: "UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
    //   complete: false,
    //   week: 5,
    //   day: 1,
    //   },
      // {
      // topic: "SQL",
      // subtopic: "DELETE Statement",
      // weektopic: "Databases, SQL, Postgres",
      // summary: "The DELETE statement is used to delete existing records in a table.",
      // syntax: "DELETE FROM table_name WHERE condition;",
      // complete: false,
      // week: 5,
      // day: 2,
      // },{
      // topic: "SQL",
      // subtopic: "CREATE Statement",
      // weektopic: "Databases, SQL, Postgres",
      // summary: "The CREATE TABLE statement is used to create a new table in a database.",
      // syntax: "CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
      // complete: false,
      // week: 5,
      // day: 2,
      // },
      // {
      // topic: "Databases",
      // subtopic: "Pool",
      // weektopic: "Databases, SQL, Postgres",
      // summary: "A connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required.",
      // syntax: "",
      // complete: false,
      // week: 5,
      // day: 3,
      // },{
      // topic: "Databases",
      // subtopic: ".env files",
      // weektopic: "Databases, SQL, Postgres",
      // summary: "The .env file is a text configuration file for controlling your Applications environment constants",
      // syntax: "",
      // complete: false,
      // week: 5,
      // day: 3,
      // },{
      // topic: "Databases",
      // subtopic: "Environment variables",
      // weektopic: "Databases, SQL, Postgres",
      // summary: "An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer.",
      // syntax: "",
      // complete: false,
      // week: 5,
      // day: 4,
      // },{
      // topic: "Databases",
      // subtopic: "dotenv",
      // weektopic: "Databases, SQL, Postgres",
      // summary: "DotEnv is an npm package that automatically loads environment variables from a . env file into the process object.",
      // syntax: "",
      // complete: false,
      // week: 5,
      // day: 4,
      // },
      // {
      //   topic: "HTML",
      //   subtopic: "Semantic HTML",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 1,
      //   },
      // {
      //   topic: "HTML",
      //   subtopic: "DOCTYPE",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "A document type declaration, or DOCTYPE, is an instruction that associates a particular XML or SGML document with a document type definition. In the serialized form of the document, it manifests as a short string of markup that conforms to a particular syntax.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 2,
      //   },
      //   {
      //   topic: "JavaScript",
      //   subtopic: "5 Pillars of Programming",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "The five pillars of programming are: operators, variables and types, logic flow, loops, and functions.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 3,
      //   },
      //   {
      //   topic: "Programming",
      //   subtopic: "REPL",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "A read eval print loop is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 3,
      //   },
      //   {
      //   topic: "JavaScript",
      //   subtopic: "Primitive Types",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "In computer science, primitive data types are a set of basic data types from which all other data types are constructed. In JavaScript these are: string, bigint, number, boolean, undefined, symbol, and null.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 3,
      //   },
      //   {
      //   topic: "JavaScript",
      //   subtopic: "Functions",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "A function is a block of organized code that is used to perform a single task, and can be used over and over again. Functions enable programmers to break down or decompose a problem into smaller blocks, each of which performs a particular task.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 3,
      //   },
      //   {
      //   topic: "JavaScript",
      //   subtopic: "Non-Primitive Types",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types. In JavaScript these are: objects.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 4,
      //   },
      //   {
      //   topic: "Programming",
      //   subtopic: "Casing",
      //   weektopic: "Basic HTML, CSS, & JavaScript",
      //   summary: "Casing is variable naming convention. There are many casing conventions, including: Camel Case, Snake Case, Pascal Case, and Kebab Case, among others.",
      //   syntax: "",
      //   complete: false,
      //   week: 1,
      //   day: 5,
      //   }
      // {
      //   topic: "APIs",
      //   subtopic: "The DOM",
      //   weektopic: "Functions & APIs",
      //   summary: "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree. The DOM is built in the browser. If you change something on the DOM, it doesn't affect the source HTML.",
      //   syntax: "",
      //   complete: false,
      //   week: 2,
      //   day: 1,
      //   },{
      //   topic: "JavaScript",
      //   subtopic: "querySelector",
      //   weektopic: "Functions & APIs",
      //   summary: `The querySelector() is a method of the Element interface. The querySelector() method allows you to select the first element that matches one or more CSS selectors.",
      //   syntax: "document.querySelector("CSS-selector"), eg. document.querySelector("p");`,
      //   complete: false,
      //   week: 2,
      //   day: 1,
      //   },
      //   {
      //     topic: "JavaScript",
      //     subtopic: "Event Listeners",
      //     weektopic: "Functions & APIs",
      //     summary: "An event listener is a procedure or function in a computer program that waits for an event to occur. Examples of an event are the user clicking or moving the mouse, pressing a key on the keyboard, disk I/O, network activity, or an internal timer or interrupt.",
      //     syntax: `.addEventListener(), eg. document.getElementById("myBtn").addEventListener("click", displayDate);`,
      //     complete: false,
      //     week: 2,
      //     day: 2,
      //     },
      //   {
      //   topic: "APIs",
      //   subtopic: "API",
      //   weektopic: "Functions & APIs",
      //   summary: "An API (application programming interface) is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software.",
      //   syntax: "",
      //   complete: false,
      //   week: 2,
      //   day: 3,
      //     },
      //     {
      //   topic: "JavaScript",
      //   subtopic: "JSON",
      //   weektopic: "Functions & APIs",
      //   summary: "JSON stands for JavaScript Object Notation. It is a lightweight format for storing and transporting data, and is often used when data is sent from a server to a webpage.",
      //   syntax: `example: {
      //     "employees":[
      //         {"firstName":"John", "lastName":"Doe"}, 
      //         {"firstName":"Anna", "lastName":"Smith"},
      //         {"firstName":"Peter", "lastName":"Jones"}
      //       ]
      //     }`,
      //   complete: false,
      //   week: 2,
      //   day: 3,
      //     },
      //   {
      //     topic: "JavaScript",
      //     subtopic: "Stringify",
      //     weektopic: "Functions & APIs",
      //     summary: "When sending data to a web server, the data has to be a string. You can convert a JavaScript object to a string with the stringify method.",
      //     syntax: `JSON.stringify(value)`,
      //     complete: false,
      //     week: 2,
      //     day: 3,
      //     },
      //     {
      //     topic: "Fetch",
      //     subtopic: "Fetch API",
      //     weektopic: "Functions & APIs",
      //     summary: "The Fetch API provides an interface for fetching resources (including across the network). It is built into the browser allowing requests from external sources.",
      //     syntax: "",
      //     complete: false,
      //     week: 2,
      //     day: 3,
      //   },
      //   {
      //   topic: "Fetch",
      //   subtopic: "Promises",
      //   weektopic: "Functions & APIs",
      //   summary: "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. A Promise is in one of these states: pending: initial state, neither fulfilled nor rejected, fulfilled: meaning that the operation was completed successfully, rejected: meaning that the operation failed.",
      //   syntax: "",
      //   complete: false,
      //   week: 2,
      //   day: 3,
      //     }
  ];
 

  

  export const notes = {
    title: "note title",
    note: "",
  }

  export const resources = {
    title: "resourceName",
    resource: "resource"
  }


  
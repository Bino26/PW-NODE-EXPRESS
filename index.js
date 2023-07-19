const fs = require("fs");
// ===Q3===
fs.readFile("nodejs_architecture.txt", function (err, data) {
  if (err) {
    console.log("Eroor in reading file");
  } else {
    console.log(data.toString());
  }
});
// // ===Q4===
fs.appendFile(
  "nodejs_architecture.txt",
  "Node.js is an event-driven, non-blocking, and lightweight JavaScript runtime that allows for efficient server-side application development. Its key advantages include high performance due to the V8 engine, asynchronous programming capabilities, and scalability for handling concurrent connections. It is particularly well-suited for building real-time applications, microservices, and APIs",
  "utf-8",
  function (err) {
    if (err) {
      console.log("Error in appending file");
    } else {
      console.log("Successful");
    }
  }
);
// // ===Q5===

fs.unlink("nodejs_architecture.txt", function (err) {
  if (err) {
    console.log("File no find ");
  } else {
    console.log("Successful");
  }
});

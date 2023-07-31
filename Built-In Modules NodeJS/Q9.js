const events = require("events");
const eventEmitter = new events.EventEmitter();

// listener #1
const listner1 = function listner1() {
  console.log("listner1 executed.");
};

// listener #2
const listner2 = function listner2() {
  console.log("listner2 executed.");
};

// Bind the connection event with the listner1 function
eventEmitter.addListener("connection", listner1);
// Bind the connection event with the listner2 function
eventEmitter.on("connection", listner2);
//counters event listenner
const eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " Listner(s) listening to connection event");

// Trigger the 'subscribe' event
eventEmitter.emit("connection");

//Remove the connection event with listener 
eventEmitter.removeListener("connection", listner1);
console.log("Listener 1 now deleted");

eventEmitter.emit("connection");

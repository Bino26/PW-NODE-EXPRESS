const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.addListener("subscribe", () => {
  console.log("Thanks for Subscribing to College Wallah");
});

// Trigger the 'subscribe' event
eventEmitter.emit("subscribe");
 // Thanks for Subscribing to College Walah

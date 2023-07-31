const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.addListener("subscribe", () => {
  console.log("Thanks for Subscribing to College Wallah");
});

// Trigger the 'subscribe' event
eventEmitter.emit("subscribe");
 // Thanks for Subscribing to College Walah

console.log(
  `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);
//Set the new maxlimit
eventEmitter.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

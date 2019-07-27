const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("dataReceived",(data)=>{
    console.log(data);
    console.log("data is already received");
})

eventEmitter.on("connect",()=>{
    console.log("connect success");
    eventEmitter.emit("dataReceived");
})

eventEmitter.emit("connect");


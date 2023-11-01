const events = require('events');
const eventEmitter = new events.EventEmitter();

var data = function test(){
    console.log("Ball in the air!");
    eventEmitter.emit("catch");
}

eventEmitter.on("Match",data);

eventEmitter.on("catch",function(){
    console.log("Catched!");
})
eventEmitter.emit("Match");
console.log("Out!");
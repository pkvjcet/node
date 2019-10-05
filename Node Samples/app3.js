
const EventEmitter=require('events');
var emitter=new EventEmitter; //object created
//function definintion

//event binding
emitter.on("myEvent",()=>{
    console.log("first event occured");
});
emitter.on("myEvent",()=>{
    console.log("second event occured");
});
//event firing
emitter.emit('myEvent');
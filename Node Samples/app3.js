
const EventEmitter=require('events');
var emitter=new EventEmitter; //object created
//function definintion

//event binding
emitter.once("myEvent",()=>{
    console.log(" event occured");
});

//event firing
emitter.emit('myEvent');
emitter.emit('myEvent');
emitter.emit('myEvent');
emitter.emit('myEvent');
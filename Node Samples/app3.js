
const EventEmitter=require('events');
var emitter=new EventEmitter; //object created
//function definintion
function myEventFunction(){
    console.log("event occured");
}
//event binding
emitter.on("myEvent",myEventFunction);
//event firing
emitter.emit('myEvent');
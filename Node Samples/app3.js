
const EventEmitter=require('events');
var emitter=new EventEmitter; //object created
//function definintion

//event binding
emitter.on("myEvent",(a,b)=>{
    console.log("event arg1="+a+"arg2="+b);
});
//event firing
emitter.emit('myEvent',1,"prince");
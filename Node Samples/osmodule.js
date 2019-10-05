const os=require('os');
var totMem=os.totalmem();
var freemem=os.freemem();
console.log("total memory="+totMem);
console.log("free memory="+freemem);
console.log(os.networkInterfaces());
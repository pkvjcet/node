const fs=require("fs");
fs.readdir('./',function(err,result){
    if(err) console.log("eeror");
    else console.log("files",result);
});

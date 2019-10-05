var http=require('http'),url=require('url');
var server=http.createServer(function(req,res){
    var urlParts=url.parse(req.url);
    console.log(urlParts);
    switch(urlParts.pathname){
        case "/":
            homepage(req,res);
            break;
        case "/read":
            read(req,res);
            break;
        case "/user/update":
            update(req,res);
            break;
    }
});
server.listen(8080,function(){
    console.log("listening 8080....");
});
function homepage(req,res){
        res.end("home page");
}
function read(req,res){
    res.end("Read page");
}
function  update(req,res){
    res.end("update page");
}
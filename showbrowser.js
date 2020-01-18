const http = require("http");
const fs = require("fs");

fs.readFile("./fs.html", function(err, data){

if (err) throw err;

const server = http.createServer(function(req, res){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(data);
        res.end();
}).listen(3000, ()=>console.log("Server running on port 3000"));

});
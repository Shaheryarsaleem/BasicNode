const fs = require("fs");


fs.unlink(__dirname+"/fs.html", (err, data)=>{
    if(err) throw err;
    console.log("file successfully delete");
});
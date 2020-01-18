const fs = require("fs");

fs.readFile(__dirname+"/fs.html","utf8",(err, data)=>{
    if(err) throw err;
    console.log(data);
})
console.log(fs);



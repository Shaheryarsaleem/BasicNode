console.log("Alhamdulillah");

console.log("Object by literl");
var icon = {
    sample:"wasgroup",
    start:2019,
    email:"shaheryarsaleem1@gmail.com"
}

console.log(icon);


console.log("Object by new keyword");
var logo = new Object();
logo.name= "wasgroup";
logo.start= 2019

console.log(logo);



console.log("Object by fn constructor");
var fnCons = function(name, year){
    this.name = name;
    this.year = year;
}

var fnConsObj = new fnCons("Shaheryar", 2019);
var fnConsObj2 = new fnCons("Saleem", 2019);

console.log(fnConsObj2);


console.log("annanomus function");
var annanomusFn = function(a){
    console.log("This is annanomus function " + a);
}

annanomusFn(10);


console.log("arrow function");
var coin = (a) => console.log("Arrow function "+a);

coin(2);


var coin2 = (c,d) =>{
    b = c+d;
    console.log("Arrow function passing multiple line " + b);
}

coin2(2,1);



console.log("File required");

var ma = require('./main');
console.log(__filename);


var mai = require('./main');

console.log(mai.abc);



console.log("Class");
class Mobile {
    constructor(model, price){
        this.model=model;
        this.price=price;
    }

    show(){
        return this.model + "price is" + this.price;
    }
}


var samsung = new Mobile("IOS", "210000");
console.log(samsung.show);










console.log("hello");

// creating variable
var a = 5;
var b = 9;
var c = "aryan";
// variable name can start with _, letter, symbol but not number
// they are case sensitive

// constant variable
const ab = 7;
// value can never be altered/changed

// basic arthamatics
console.log(a + b + 7);

// finding datatype of variables
console.log(typeof a, typeof c);

let abc = 57;
// let is block scoped or inherits from parent
// var is globally scoped

// we should try to use let instead of var
// let >> var

{ 
    let abc = 42;
    console.log(abc);
}
console.log(abc);

var cba = 31;
{ 
    var cba = 42;
    console.log(cba);
}
console.log(cba);

// Data types (premetive)

let xa = 34; //number
console.log(typeof xa);

let xb = 3.34; //number
console.log(typeof xb);

let xc = "aryan" //string
console.log(typeof xc);

let xd = true; //boolean
console.log(typeof xd);

let xe = null; //object
console.log(typeof xe);

let xf = undefined; //undefined
console.log(typeof xf);



// creating object

let obj = {
    'name':'aryan',
    'age':22,
    "is tall":true
}

// adding more elements to object 
obj.salary = "5 coror";

console.log(obj);



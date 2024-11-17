function print() {
    console.log('hello aryan you are great');
}

function employee(name) {
    console.log('hey ' + name + " how are you");
}

function sum(a , b){
    console.log(a + b);
}

function add(a, b){
    return a+b;
}

// function with default value
function aftergrace(a, b=4) {
    console.log(a + b);
}

// arrow function
let a = (x)=>{
    console.log('value of a = ' + x);
}

print();
employee("aryan");
sum(4,5);
console.log('4 + 5 = ' + add(4, 5));
aftergrace(3); 
a(56);

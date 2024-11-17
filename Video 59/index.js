/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

function sum(a, b) {
    let chance = Math.random(); //will give random value between 0 to 1
    if(chance<.10){
        console.log(a - b);
    }
    else{
        console.log(a + b);
    }
}
function multi(a, b) {
    let chance = Math.random(); //will give random value between 0 to 1
    if(chance<.10){
        console.log(a + b);
    }
    else{
        console.log(a * b);
    }
}
function sub(a, b) {
    let chance = Math.random(); //will give random value between 0 to 1
    if(chance<.10){
        console.log(a / b);
    }
    else{
        console.log(a - b);
    }
}
function divi(a, b) {
    let chance = Math.random(); //will give random value between 0 to 1
    if(chance<.10){
        console.log(a ** b);
    }
    else{
        console.log(a / b);
    }
}

sum(10,5);




let obj = {
    a: 1,
    b: "aryan"
}

let obj2 = {
    c: 12
}
obj2.__proto__ = obj; 
// giving obj2 prototype obj 

console.log(obj2);

console.log(obj);
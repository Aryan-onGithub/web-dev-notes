// 11min 

// string are immutable

let a = "aryan"
console.log(a);

console.log(a[2]);
// console.log(a[5]);

console.log(a.length);

let myname = "aryan"
let friend = "jatin"
console.log('my name is ' + myname + ' and my freind name is ' + friend);
// or 
console.log(`my name is ${myname} and my friend name is ${friend}`);
// need to use back-tick

console.log('a\\b');
console.log('a"b');
// or
console.log("a\"b");

let word = "ulla ulleo"
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.repeat(2));

console.log(word.slice(3));
console.log(word.slice(3, 9));

console.log(word.replace('ul', "77"));
// if their are more then one occerence, then onlyh the first occerence gets replace 

console.log(word.concat(a, friend, "is my freind"));

let c = "       aaaaa "
console.log(c.trim());
// removes white spaces
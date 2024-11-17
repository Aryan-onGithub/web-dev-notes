// 13min 

let arr = [1,"del",2,4,2]

arr[1]=544
// arrays are mutable

console.log(arr);
console.log(arr[2]);
console.log(typeof arr);
console.log(arr.length);
console.log(arr.toString());
console.log(arr.join(" and "));
// changes commas with join value

console.log(arr.pop());
console.log(arr);
console.log(arr.push(100));
//takes out the last element
console.log(arr.push("aryan"));
// single array can have all type of values if wanted 
console.log(arr);

console.log(arr.shift());
// takes out the first element
console.log(arr);
console.log(arr.unshift("chandra"));
console.log(arr)
//adds element to 0 index


let array = [1,2,3]

arr = delete array[1]
//makes the element empty but does not remove the space entirely
console.log(array);
console.log(array.length);

let a1 = ["aryan", "chandra", "is"]
let a2 = [22, "yr", "old"]
let a3 = ["what", "about", "you"]
console.log(a1.concat(a2, a3));
// creates a new array does not change the existing array 

let arr2 = [1,7,3,0,6]
arr2.sort()
console.log(arr2);
let arr3 = [1,"a","b",3,2,1,"@","#"]
console.log(arr3.sort());

// sort method rearranges the array and modifies array itself

let num = [1,2,4,2,4]
console.log(num.splice(2,2,3));
// (index, no. of element to remove, add elements(optional))
console.log(num);

console.log(num.slice(2));
// creates new array 
console.log(num);

// splice = modify original array 
// slice = creates new array

let num2 = [6,9,6,79,4]
console.log(num2.reverse());

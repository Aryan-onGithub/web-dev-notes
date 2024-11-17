// 18min 

let a = [14,41,2,4,14,1]

// forloop

 for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
 }

//for each loop
a.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

let obj = {
    1 : "aryan",
    2 : "palak",
    3 : "lucy"
}

// for in
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// for of
for (const iterator of a) {
    console.log(iterator);
}

let b = [2,3,4,5,6]
let bsq = []
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    bsq.push(element**2)
}
console.log(bsq);


// map
let newarr = b.map((e)=>{   //made a array named newarray, and use map to itereate all values of array b and store them in e
return e**2
})
console.log(newarr);

// making function 
const greaterThenFive = (e)=>{
    if (e>5)
        return true;
    else
        return false;
}

// filter 
console.log(a.filter(greaterThenFive));

// or we can also write this like this 
console.log(a.filter(
    (e)=>{
        if (e>5)
            return true;
        else
            return false;
    }
));

// understanding Reduce 
let c = [1,2,3,4,5]
const add = (a,b)=>{
return a+b
}

console.log(c.reduce(add));
// reduce takes first 2 elements of array till it reaches the last element 

// Array.from , making array from a string
let d = Array.from("aryan")
console.log(d);
let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a>.5){
        reject("the random value is too high")
    }
    else{
    console.log('i am done');
    resolve("the random value it Okay")
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a>.5){
        reject("the random value is too high 2")
    }
    else{
    console.log('i am done 2');
    resolve("the random value it Okay 2")
    }
})

let prom3 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a>.5){
        reject("the random value is too high 3")
    }
    else{
    console.log('i am done 3');
    resolve("the random value it Okay 3")
    }
})

let prom4 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a>.5){
        reject("the random value is too high 4")
    }
    else{
    console.log('i am done 4');
    resolve("the random value it Okay 4")
    }
})

let prom5 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a>.5){
        reject("the random value is too high 5")
    }
    else{
    console.log('i am done ');
    resolve("the random value it Okay 5")
    }
})

// prom1.then((a)=>{
// console.log(a); //give the value of resolve
// }).catch((err)=>{
//     console.log(err);
// })

prom3 = Promise.all([prom1, prom2, prom3, prom4, prom5])

prom3.then((a)=>{
console.log(a); //give the value of resolve
}).catch((err)=>{
    console.log(err);
})
let fun = new Promise((resolve, reject)=>{

let i = Math.random()
if(i>.5){
    reject("not done")
}
else{ 
    setTimeout(() => {
        resolve("done")
    }, 2000);
}
})

fun.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
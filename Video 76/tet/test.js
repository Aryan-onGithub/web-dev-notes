// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully



async function loadname(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("aryan")
        }, 3000)
    })
} //will for in bckgorund as async

async function loadname(){
  let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await a.json()
  console.log(data);
  return 344
} //will for in bckgorund as async

async function main() {
    
console.log('step 1');
console.log('step 2');

let myname = await loadname()  //the code will stop and wait for this task to complete and then execute the rest of the programme
//await can be used inside a async function
console.log(myname);

// myname.then((val)=>{
//     console.log(val);
    
//     console.log('step 3');
//     console.log('step 4');
// })

console.log('step 3');
console.log('step 4');
}

main()
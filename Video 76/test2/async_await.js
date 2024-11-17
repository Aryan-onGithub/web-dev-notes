async function getdata(){  //function will work in background
    return new Promise((resolve, reject)=>{
setTimeout(() => {
    resolve("step 2")
}, 2000);
    })
}

async function main() { //to use await we need to have it under a async function
    
    
    console.log('step 1');
    
    let a = await getdata() //wait for the value then play the rest of the code
    
    console.log(a);
    
    console.log('step 3');
}

main()

// async await are used to stop the rest of the code from playing till a certian value is called 
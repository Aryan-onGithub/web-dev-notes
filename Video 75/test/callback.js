console.log("step 1");

setTimeout(()=>{
    console.log('step 2');
},1000)   //asynchronous nature of settimeout (check in console)

console.log('Step 3');

const callback = (arg)=>{
    console.log(arg);
}

const loadscript = (src, callback)=>{
    let sc =  document.createElement("script")
    sc.src = src;
    sc.onload = callback("aryan")
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
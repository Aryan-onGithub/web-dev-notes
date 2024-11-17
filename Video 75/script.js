console.log("Harry is a hacker")
console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

// setTimeout is a asincrones funtion thats why it will be executed at LargestContentfulPaint, no matter whare it is placed



const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

// callback function:= calling another function inside a function


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
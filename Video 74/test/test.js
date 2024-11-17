// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


let butten = document.getElementById("btn")
// butten.addEventListener("click", ()=>{
//     alert("hey, dont click me")
// })

// butten.addEventListener("mouseover", ()=>{
//     alert("dont touch me")
// })

butten.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "hey dont touch the button he is sleeping!"
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})

function randomcolor(){
    let one = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let two = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let three = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    return `rgb(${one}, ${two}, ${three})`
}

console.log(randomcolor());

let a = setInterval(()=>{
    butten.style.backgroundColor = randomcolor()
    butten.style.borderColor = randomcolor()
    butten.style.color = randomcolor()
},300)

console.log(a);
// clearInterval(2)

 let b = setTimeout(()=>{
console.log("5 seconds have passed");
}, 5000)

console.log(b);

// clearTimeout(3)
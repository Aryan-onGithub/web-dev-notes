let boxes = document.body.getElementsByClassName("box")
console.log(boxes);

boxes[2].style.backgroundColor="Red"

document.getElementById("box3").style.backgroundColor="blue"

document.querySelector(".box").style.backgroundColor="green"
// selects only the first element with the property 
//we can also write #box3  

document.querySelectorAll(".box").forEach(a =>{
    a.style.backgroundColor="red"
})
// this way you can select all elements with same class 
// querySelectorAll gives the array of all the element with the required selector 

console.log(document.getElementsByTagName("div"));
// gives the list of all the div in the html document 
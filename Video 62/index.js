/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

// function random(){
    
// }

let adj = {
"1": "Crazy", 
"2":"Amazing",
"3":"Fire" 
}

let shopname = {
"1": "Engine", 
"2":"Foods",
"3":"Garments" 
}

let word = {
"1": "Bros", 
"2":"Limited",
"3":"Hub" 
}


let rd_adj = Math.floor((Math.random()*3)+1)
let rd_shopname = Math.floor((Math.random()*3)+1)
let rd_word = Math.floor((Math.random()*3)+1)

console.log(`${adj[rd_adj]} ${shopname[rd_shopname]} ${word[rd_word]}`);



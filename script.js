let randomNumber = Math.floor(Math.random()*100);
const  choosedNumber = document.querySelector('#slider');
let tentatives = 15;
let button = document.querySelector('#btn');
let nbtent = document.querySelector('.nbtent');
let result = document.querySelector("#resultat");


button.addEventListener("click", validez);


function validez(){
    let nbChoisi = parseInt(choosedNumber.value);
    let reponse = document.querySelector('#resultat');
    console.log(randomNumber);
        if (nbChoisi === randomNumber){
            reponse.innerHTML ="Tu as gagné!";
            randomNumber = Math.floor(Math.random()*100);
            tentatives = 16;
        } else if (nbChoisi > randomNumber) {
            reponse.innerHTML ="Plus bas!";
        } else if (nbChoisi < randomNumber) {
            reponse.innerHTML ="Plus haut!";
        }
        tentatives--;  
        nbtent.innerHTML = tentatives; 
        if (tentatives === 0){
            reponse.innerHTML ="Tu as perdu."; 
            randomNumber = Math.floor(Math.random()*100);
            tentatives = 16;
        }
    
}

let randomNumber = Math.floor(Math.random()*100);
const  choosedNumber = document.querySelector('#slider');
let tentatives = 3; // Variable correspondant au nombre de tentatives
let button = document.querySelector('#btn');
let nbTent = document.createElement("p"); // Nous créons un élement p dans une variable nommée nbTent
let nodeTent = document.createTextNode(tentatives); // On donne le nombre de tentatives dans le contenu de l'élement p
nbTent.appendChild(nodeTent); // On ajoute le contenu de l'élement p dans le paragraphe
document.getElementById("tent").appendChild(nbTent);  // On ajoute le paragraphe a la div nommée "tent"
let result = document.querySelector("#resultat");

button.addEventListener("click", validez);


function validez(){
    let nbChoisi = parseInt(choosedNumber.value);
    let reponse = document.querySelector('#resultat');
    console.log(randomNumber);
    tentatives--; 
        if (nbChoisi === randomNumber){
            reponse.innerHTML ="Tu as gagné!"; 
            randomNumber = Math.floor(Math.random()*100);
            tentatives = tentatives ;
        } else if (nbChoisi > randomNumber) {
            reponse.innerHTML ="Plus bas!";
        } else if (nbChoisi < randomNumber) {
            reponse.innerHTML ="Plus haut!";
        } 
        nbTent.innerHTML = tentatives; 
        if (tentatives === 0){
            reponse.innerHTML ="Tu as perdu.";
            randomNumber = Math.floor(Math.random()*100);
            tentatives = tentatives ;
            choosedNumber.innerHTML = "";
        }
    
}

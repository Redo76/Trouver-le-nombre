let randomNumber = Math.floor(Math.random*100);
const winningNumber = 21;
let tentatives = 15;

function choisirNombre(){
    document.getElementById("custom-handle")
}




for (var i=0 ; i< tentatives; i++){
    if (randomNumber === winningNumber){
        console.log("Tu as gagné!");
    } else {
        console.log("Tu as perdu.");
    }
}
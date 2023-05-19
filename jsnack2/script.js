// Generare numero casuale tra 1 a 100. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
// Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
// Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

const numToFind = parseInt(Math.random() * 100) + 1;
let numAttempts = 0;
let victory = false;

while(victory == false){

    let userNumber = prompt("Inserisci il numero che ho pensato: ")
    
    if (userNumber == numToFind){
        console.log("Complimenti! Hai indovinato!");
        console.log("Ci hai messo solo " + numAttempts + " tentativi!");
        victory = true;
    }else if (userNumber > numToFind){
        console.log("Troppo grande...");
        numAttempts++
    }else if (userNumber < numToFind){
        console.log("Troppo piccolo...");
        numAttempts++
    }

}
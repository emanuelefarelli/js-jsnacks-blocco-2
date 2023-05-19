// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let array = [];
let somma = 0;
let limite = false;

while(limite == false){
    let userNumber = parseInt(prompt('inserisci numero:'));
    array.push(userNumber);

    if((!isNaN(userNumber)) && (userNumber > 0)){
        somma += userNumber;
        console.log('il tuo numero: ' + userNumber);
        console.log('La somma totale: ' + somma);
        if( somma >= 50){
            console.log("hai raggiunto il limite")
            limite = true;
        }
    }else{
        console.log("non hai digitato un numero valido");
    }
}

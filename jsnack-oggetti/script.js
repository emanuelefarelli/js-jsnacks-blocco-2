// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore
//     Nome
//     Cognome
//     Età
//     Media punti fatti per partita
//     Percentuale di successo per tiri da 3 punti
//     Stoppate 
//     Tiri 


// Generare casualmente le statistiche di gioco, secondo queste regole:
//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//     la media punti fatti per partita deve essere compresa tra 0 e 50
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//     le stoppate sono un numero intero compresot ra 0 e 30
//     i tiri sono un numero intero compreso tra 20 e 100


const giocatore = {
    id : 01,
    nome: 'Luigi',
    cognome: 'Luigetti',
    age: 34,
    mediaPunti: 4,
    percentSuccesso: 50,
    stop: 34,
    tiri: 23
}

giocatore.id = createId(6);
giocatore.nome = 'Luigi';
giocatore.cognome = 'Luigetti';
giocatore.age = random(18,50);
giocatore.mediaPunti = random(0,50);
giocatore.percentSuccesso = random(0,100);
giocatore.stop = random(0,30);
giocatore.tiri = random(20,100);

console.log(giocatore);


function createId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function random(min,max){
    return parseInt(Math.random() * max) + min;
}
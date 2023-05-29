// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..

let items = [];

const itemButton = document.getElementById('item-button');
const startButton = document.getElementById('start-button');
const container = document.getElementById('container');

itemButton.addEventListener('click',function(){
    const itemDigit = document.getElementById('items-input').value;
    items.push(itemDigit);
    console.log(items);
})

startButton.addEventListener('click',function(){
    const ulList = document.createElement('ul');
    container.append(ulList);

    for(let i = 0 ; i < items.length ; i++){
        const item = document.createElement('li');
        item.innerHTML = items[i];
        ulList.append(item);
    }
});

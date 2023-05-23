/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */

const listaSpesa = ['pane','salame','formaggi','latte','biscotti','detersivo','carote','mozzarelle','soia','salsiccia'];

const ul = document.querySelector('ul');

for(let i = 0 ; i < 10; i++){
    addLi(listaSpesa[i]);
}


function addLi(item){
    const element = document.createElement('li');
    element.append(item);
    ul.append(element);

    element.addEventListener('click',function(){
        element.classList.toggle('lined');
    });
}
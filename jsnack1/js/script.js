// Dichiarazione variabili
const mainArray = [1,4,6,8,9,11,23,44,56,72,100];
let evenArray = [];
let oddArray = [];
const red = document.getElementById('red');
const green = document.getElementById('green');

// Ciclo tutto l'array
for (let i = 0; i < mainArray.length; i++){
    currentElement = mainArray[i];
    //se pari, lo pusho sull'array dei numeri pari...
    if (currentElement % 2 === 0){
        evenArray.push(currentElement);
    //... altrimenti lo schiaffo su quello dei dispari
    } else {
        oddArray.push(currentElement);
    }
}

//stampo l'array nell'html, nel rispettivo div
red.innerHTML = oddArray;
green.innerHTML = evenArray;

// - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Dichiaro variabili e le inizializzo
let userInput = '';
let total = 0;

for (let i = 1; i <= 10; i++){
    // recupero le 10 input e le sommo in una variabile
    userInput = parseInt(prompt(`${i})Inserisci il numero: `));
    total += userInput;
}   

// stampo output in console
console.log(total);

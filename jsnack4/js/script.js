// - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
let oddArray = [];

for (let i = 1; i <= 6; i++){
    // recupero le 6 input... 
    userInput = parseInt(prompt(`${i}) Inserisci il numero: `));
    // ...e se il resto è diverso da 0 allora è dispari e lo schiaffo nell'array
    if (userInput % 2 !== 0){
        oddArray.push(userInput);
    }
}   

console.log(...oddArray);

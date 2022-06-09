// recupero dati
let userInput = prompt('inserisci un numero di 4 cifre');
let total = 0;
//controllo che sia lungo effettivamente 4 caratteri/cifre
if(userInput.length !== 4){
    // Avviso l'utente che ha sbagliato
    alert('La lunghezza del numero inserito non è corretta! ricarica la pagina e riprova :)');
} else{
    // Ciclo tutti i numeri, sommandoli alla variabile totale che contiene il risultato
    for (let i = 0; i < userInput.length; i++){
        currentNumeber = parseInt(userInput[i]);
        total += currentNumeber;
    }
    // Stampo in console
    console.log('valore totale', total);
}

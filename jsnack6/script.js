/* Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso. */

let minimo = prompt("Inserisci il numero minimo da rollare");
minimo=parseInt(minimo)
let massimo = prompt("Inserisci il numero massimo da rollare");
massimo=parseInt(massimo)

let roll = Math.floor((Math.random()*(massimo-minimo+1))+minimo);


let inputUtente = prompt("Inserisci il tuo input tra i due numeri!")

if (inputUtente < minimo || inputUtente > massimo){
    console.log("Non hai inserito un numero valido")
} else if (inputUtente == roll){
    console.log("WOW HAI VINTO!")
} else {
    console.log ("Eheh hai perso!")
}
console.log ("Il mio numero era: " + roll)
console.log ("Il tuo numero era: " + inputUtente)
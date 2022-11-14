/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine. */

let numeroInserito;
let numero1;
let numeroMaggiore = 0;
let arraynumeri = [];
let arrayNumeriPari = [];
let arrayNumeriDispari = [];

do {
    numeroInserito = prompt("Inserisci un numero o, se vuoi, un qualsiasi altro carattere per uscire.")
    if (!isNaN(numeroInserito)){
        arraynumeri.push(parseInt(numeroInserito));
    }
} while (!isNaN(numeroInserito));

for (let i=0; i<arraynumeri.length; i++){
    if (arraynumeri[i] % 2 == 0){
        arrayNumeriPari.push(arraynumeri[i]);
    } else {
        arrayNumeriDispari.push(arraynumeri[i]);
    }
    }

console.log ("L'insieme dei numeri pari è: " + arrayNumeriPari)
console.log ("L'insieme dei numeri dispari è: " + arrayNumeriDispari)
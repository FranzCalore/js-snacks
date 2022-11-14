/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let numeroInserito;
let numero1;
let numeroMaggiore = 0;
let arraynumeri = [];
let somma = 0;
let media = 0;
let numeroMinore = 0;
do {
    numeroInserito = prompt("Inserisci un numero o, se vuoi, un qualsiasi altro carattere per uscire.")
    if (!isNaN(numeroInserito)){
        arraynumeri.push(parseInt(numeroInserito));
    }
} while (!isNaN(numeroInserito));

numeroMinore = arraynumeri[0];

for (let i=0; i<arraynumeri.length; i++){
    numero1=arraynumeri[i]
    if (numero1>numeroMaggiore){
        numeroMaggiore=numero1;
    } else {
        numeroMinore=numero1;
    }
    somma = somma + numero1;
}
media = somma/(arraynumeri.length)
console.log ("Il numero minore è: " + numeroMinore)
console.log ("Il numero maggiore è: " + numeroMaggiore)
console.log ("La somma è: " + somma)
console.log ("La media è: " + media)
/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. 
Ho tentato di generalizzare l'esercizio. */

let numeroInserito;
let numero1;
let numeroMaggiore = 0;
let arraynumeri = [];
do {
    numeroInserito = prompt("Inserisci un numero o, se vuoi, un qualsiasi altro carattere per uscire.")
    if (!isNaN(numeroInserito)){
        arraynumeri.push(parseInt(numeroInserito));
    }
} while (!isNaN(numeroInserito));

for (let i=0; i<arraynumeri.length; i++){
    numero1=arraynumeri[i]
    if (numero1>numeroMaggiore){
        numeroMaggiore=numero1;
    }

}
console.log("Il numero maggiore di quelli inseriti è: " + numeroMaggiore)
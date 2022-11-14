let numeroInserito;
let numero1;
let numero2 = 0;
let arraynumeri = [];
do {
    numeroInserito = prompt("Inserisci un numero o, se vuoi, un qualsiasi altro carattere per uscire.")
    if (!isNaN(numeroInserito)){
        arraynumeri.push(numeroInserito);
    }
} while (!isNaN(numeroInserito));

for (let i=0; i<arraynumeri.length; i++){
    numero1=arraynumeri[i]
    if (numero1>numero2){
        numero2=numero1;
    }

}
console.log("Il numero maggiore di quelli inseriti è: " + numero2)
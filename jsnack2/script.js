/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga */

parola1=prompt("Inserisci una parola");
parola2=prompt("Inserisci un'altra parola");

lunghezzaParola1=parola1.length;
console.log(lunghezzaParola1)
lunghezzaParola2=parola2.length;
console.log(lunghezzaParola2)

if (lunghezzaParola1>lunghezzaParola2){
    console.log(parola2 + ", " + parola1);
} else if (lunghezzaParola1<lunghezzaParola2){
    console.log(parola1 + ", " + parola2);
} else {
    console.log(parola2 + ", " + parola1 + " hanno la stessa lunghezza");
}
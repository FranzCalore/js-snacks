/* In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */

let invitati = ["bryan", "emanuele", "monica", "sayori", "yuri"];

let nomeInvitato = prompt ("Inserisci il tuo nome");

let nomeONumero = nomeInvitato.charAt(0)

nomeONumero = isNaN(nomeONumero)

if (nomeONumero){

nomeInvitato = nomeInvitato.toLowerCase();

let flag=false;

for (i=0; i<invitati.length; i++){
    if (nomeInvitato==invitati[i]){
        flag=true;
    }
}

if (flag){
    console.log("Puoi entrare, buon divertimento!")
} else {
    console.log ("Mi dispiace, il tuo nome non è sulla lista!")
}
} else {
    console.log ("O sei figlio di Elon Musk o mi stai prendendo in giro!")
}
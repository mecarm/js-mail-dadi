/*
1-Creare array contenente email (e opportunità di inserire la propria ).
2-Controllare l'email se è presente:
    -se non è presente non può accedere
    -se è presente vai avanti
3-dopo controllo far comparire il gioco.
4- creare una funzione che genere un numero da 1 a 6
    -Il primo per il player
    -il secondo per il bot

*/

const giocatori = ["mecar99@gmail.com", 'pippo12@gmail.com', 'baudo13@gmail.com'];

function valida(){
    let email = document.getElementById('email').value;
    if (giocatori.includes(email) ){
        console.log('Bentornato, ora puoi giocare');
        document.getElementById('bentornato').innerHTML = `Bentornato ${email}`;
        document.getElementById('play').className = 'd-show';

    } else {
        console.log('Non sei iscritto')
    }
}





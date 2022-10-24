/*
1-Creare array contenente email (e opportunità di inserire la propria ).
2-Controllare l'email se è presente:
    -se non è presente non può accedere
    -se è presente vai avanti
3-dopo controllo far comparire il gioco.
*/

const giocatori = ["mecar99@gmail.com", 'pippo12@gmail.com', 'baudo13@gmail.com'];


function valida(){
    let email = document.getElementById('email').value;
    if (giocatori.includes(email) ){
        console.log('Bentornato, ora puoi giocare')
    } else {
        console.log('Non sei iscritto')
    }
}



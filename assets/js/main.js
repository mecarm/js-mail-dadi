const giocatori = ["mecar99@gmail.com", 'pippo12@gmail.com', 'baudo13@gmail.com'];

function valida(){
    let email = document.getElementById('email').value;
    if (giocatori.includes(email) ){
        console.log('Bentornato, ora puoi giocare');
        document.getElementById('bentornato').innerHTML = `Bentornato ${email}`;
        document.getElementById('play').className = 'd-show';

    } else {
        console.log('Non sei iscritto')
        document.getElementById('bentornato').innerHTML = `Email non valida`;

    }
}





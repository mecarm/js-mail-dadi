let player = "Tu"
let Bot = "Computer"

function tiraDado(){
    let numeroRandom1 = Math.floor(Math.random()* 6) + 1;
    let numeroRandom2 = Math.floor(Math.random()* 6) + 1;

    document.querySelector('h2.numero1').innerHTML = numeroRandom1;
    document.querySelector('h2.numero2').innerHTML = numeroRandom2;

    if ( numeroRandom1 === numeroRandom2 ) {
        document.querySelector('h1').innerHTML = 'Pareggio!';
    }
    else if( numeroRandom1 > numeroRandom2 ) {
        document.querySelector('h1').innerHTML = 'Hai vinto!';
    }
    else {
        document.querySelector('h1').innerHTML = 'Hai perso!';
    }
}
function tiraDado(){
    let numeroRandom1 = Math.floor(Math.random()* 6) + 1;
    let numeroRandom2 = Math.floor(Math.random()* 6) + 1;

    document.querySelector('img.numero1').setAttribute("src", "img/dice" + numeroRandom1 + ".png");
    document.querySelector('img.numero2').setAttribute("src", "img/dice" + numeroRandom2 + ".png");


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
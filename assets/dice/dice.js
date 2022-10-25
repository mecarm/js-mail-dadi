let vittorieGiocatore = [];
let vittorieComputer = [];

function tiraDado(){
    let numeroRandom1 = Math.floor(Math.random()* 6) + 1;
    let numeroRandom2 = Math.floor(Math.random()* 6) + 1;

    document.querySelector('img.numero1').setAttribute("src", "img/dice" + numeroRandom1 + ".png");
    document.querySelector('img.numero2').setAttribute("src", "img/dice" + numeroRandom2 + ".png");

    if ( numeroRandom1 === numeroRandom2 ) {
        document.querySelector('h1').innerHTML = 'Pareggio!';
        document.querySelector('body').classList.remove('green', 'red');
        document.querySelector('body').classList.add('blu');
    }
    else if( numeroRandom1 > numeroRandom2 ) {
        document.querySelector('h1').innerHTML = 'Hai vinto!';
        document.querySelector('body').classList.remove('blu', 'red');
        document.querySelector('body').classList.add('green');
        vittorieGiocatore.push('vinto');
    }
    else {
        document.querySelector('h1').innerHTML = 'Hai perso!';
        document.querySelector('body').classList.remove('green', 'blu');
        document.querySelector('body').classList.add('red');
        vittorieComputer.push('perso');
    }

    document.getElementById('vittGiocatore').innerText = `Hai vinto : ${vittorieGiocatore.length} volte`;
    document.getElementById('vittComputer').innerText = `Il bot ha vinto : ${vittorieComputer.length} volte`;

}

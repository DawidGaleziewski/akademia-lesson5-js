'use strict'

console.log('zmienne');
// definicja funkcji
const PI = 3.14;

function poleKola(r){
    let poleKola = PI * r * r;
    console.log(poleKola);
}

// wywolanie PI
poleKola(25);
poleKola(50);

let rDuzego = 108;
poleKola(rDuzego);

console.clear();

// funkcje w ES6
// define not by function but by =>
// deklarowane przez const!
const poleKolaEs6 = (r, x) => {
    let poleKola = x * PI * r * r;
    return poleKola;
}

let wynikDzialaniaFunkcji = poleKolaEs6(10, 2);
console.log(wynikDzialaniaFunkcji);



'use strict'

let a = 2;
let b = 4;

// modulo - reszta z dzielenia
console.log(8%3);

// operatory przypisania
let liczba1 = 100
liczba1 += 80;
console.log(liczba1);


// operatory porównania
let liczbaInt = 10;
let liczbaStr = '10';

console.log(liczbaInt == liczbaStr) //true
console.log(liczbaInt === liczbaStr) //false

// iloczyn logiczny
if(!(("2" !== 2) && (8 < 4))) {
    document.write("<br> prawda");
}

// skrutowy zapis warunku
let wynikLogiczny = (2 < 8) ? 'prawda' : 'nieprawda';
console.log(wynikLogiczny);
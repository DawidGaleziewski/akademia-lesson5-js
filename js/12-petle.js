'use strict'
console.log('test');

// Pętla for
for(let i = 10; i > 0; i--) {
    console.log(`###${i}###`);
    console.log('_______');
}

let tablica = ['Krystian', 'Monika', 'Paweł'];

for(let i =0; i <= tablica.length; i++){
    console.log(tablica[i]);
}

// petla forEach na tablicach (funkcja)

const iteruj = (element, index) => {
    console.log("Element z indexem: " + index + " ma wartość " + element)
}

tablica.forEach(iteruj);

// funkcja animowa
tablica.forEach((element, index) => {
    console.log("Element z indexem: " + index + " ma wartość " + element)
});

// for in - jesli nie przez wszystkie elementy
// tylko na obiektach
let person = {
    name: 'Krystian',
    age: 35
}

for (let key in person) {
    console.log(person[key]);
}

// for of - tylko dla tablic
let iterable = [10, 20, 30];

for (let value of iterable){
    value += 1;
    console.log(value);
}

// while
let it = 0;
while (it < 10) {
    console.log(it);
    it++
}

// petla do while
let iter = 0;
do {
    iter++
    console.log(iter + ' dowhile');
} while(iter < 10)

// przerywanie pentli

console.clear();

let a = 0;
while(a < 10) {
    console.log(a)

    if(a ===5) {
        // break - przerywa pętle
        break;
    }

    a++
}

// continue - przerwanie na jedną iteracje
for(let b = 0; b < 10; ++b) {

    if(b ===5) {
        continue;
    } else {
        console.log(b);
    }
    console.log('------')
}
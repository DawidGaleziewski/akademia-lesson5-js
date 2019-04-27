'use strict'
// Tablica jest zmienna referencyjną
let imiona  = ['Monika', 'Daria', 'Lukasz'];

console.log(imiona);
// dodawanie do tablicy po indexie
imiona[3] = 'Ela';

console.log(imiona);

// nadpisywanie po indexie
imiona[3] = 'Nie Ela';
console.log(imiona);

// Funkcje na tablicach
// push - dodanie do tablicy - zwraca ostateczna długość tablicy
console.log(imiona.push('Geralt'));

// pop usówanie ostatniego elementu i zwrócenie go
console.log(imiona.pop());
imiona.pop()
console.log(imiona);

// unshift - dodawanie elementu na początek - zwraca długość tablicy
console.log(imiona.unshift('Jaskier'));
console.log(imiona);

// shift - usuwa pierwszy element tablicy - zwraca co usuwamy
console.log(imiona.shift());
console.log(imiona);

// sprawdzanie długości tablicy
console.log(imiona.length);


// join - złącznie tablicy w stringa
    // akceptuje argument którym jest separator używany
let imionStr = imiona.join('-');
console.log(imionStr);

// reverse - odraca tablice miejscami
console.log(imiona.reverse());

// sort - sortuje alfabetycznie
console.log(imiona.sort());
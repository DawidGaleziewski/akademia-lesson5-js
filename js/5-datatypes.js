'use strict'
// typy proste

let number = 1;
let string = 'howdy';
let smashing = true;
let purpose = undefined;
let failure = null;

// sprawdzanie typue danych
console.log(typeof number);
console.log(typeof string);
console.log(typeof smashing);
console.log(typeof purpose);


// typ łańcuchowe
let wyplataStr = "5000";
let premiaStr = "2500";
console.log(wyplataStr + premiaStr);

// typy logiczne
let czyJestSmog;
czyJestSmog = false;

if(czyJestSmog) {
    console.log('Jest smog');
} else {
    console.log('Nie ma smogu');
}

// Typ specjalne - undefined / null
let niezdefiniowanaZmienna = undefined;
console.log(niezdefiniowanaZmienna);

let nullowaZmienna = null;
console.log(nullowaZmienna);

// null jest dawane gdy chcemy wyzerować zmienną


// znaki specjalne w stringach
let imieStudenta ="Michał \"Kroszka\""
console.log(imieStudenta);

// dodawanie zmiennych w stringu w es6
let powitanie = `Cześć ${imieStudenta} jak się masz!`
console.log(powitanie);





'use strict'
let kaja = {
    // klucze lub pola obiektu
    imie: "Kaja",
    wzrost: 184,
    // funkcje w obiekcie to metody
    przedstawOsobe(){
        // this odwołuje się do tego obiektu
        console.log(`To jest ${this.imie}`);
    }
}
console.log(kaja);
console.log(kaja.wzrost);

// wywołaj metode
console.log(kaja.przedstawOsobe());


let krystian = {
    imie: "Krystian",
    wzrost: 200,
    przedstawOsobe(){
        console.log(`To jest ${this.imie}`);
    }
}

console.log(krystian.przedstawOsobe());

// obiekt można nadpisać
kaja.imie = 'nie Kaja';
console.log(kaja.imie);


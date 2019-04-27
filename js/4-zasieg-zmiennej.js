'use strict'
// dostęp do zmiennej
// zmienne globalne, sa dostepne dla wszystkich
let kontoLukasza = 1000000;

const zrobZakupy = (zaIle) => {
    let kontoNatalii = 2000000;

    let ileZostaloNaKoncie = kontoNatalii- zaIle;

    return ileZostaloNaKoncie;
}

// Zmienna globalna sie wyswietli
console.log(kontoLukasza);

// Zmienna lokalna kontoNatalii sie nie wyswietli
// console.log(kontoNatalii);

console.log(zrobZakupy(500000));

// !! uzywamy zmiennych lokalnych jak tylko to mozliwe!


// const zalplacPodatek = (kwota) => {
//     console.log(kontoNatalii);
// }

// zalplacPodatek(26)

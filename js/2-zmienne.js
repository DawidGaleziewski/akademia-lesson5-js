console.log('test');
'use strict'

// !!To use in real projects!!
// 'use strict';

// !!use strict - restrykcyjne traktowanie kodu
// błędem jest używanie zmiennych bez deklaracji use strict będzie uważał to za błąd

// zmienne to miejsca w pamięci
// let is better than var generally

// const powinien być deklarowany z DUŻYCH LITTER np PI, TAX, ADDRESS, BORNDATE
const PI = 3.14;

let promienDuzego = 10;
let promienMalego = 5;

let poleDuzego = PI * promienDuzego * promienDuzego;

promienDuzego = 20;

poleDuzego = PI * promienDuzego * promienDuzego;

console.log(poleDuzego);

// dobra praktyka to tak nazywac zmienne tak jak id na stronie


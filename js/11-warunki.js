let  wzrostMateusz = 180;
let wzrostOlga = 170;

if(wzrostOlga < wzrostMateusz) {

    console.log('Olga jest niższa od Mateusza');

}

wzrostOlga = 190;

if(wzrostOlga < wzrostMateusz) {

    console.log('Olga jest niższa od Mateusza');

} else {

    console.log('Olga jest wyższa od Mateusza');

}


wzrostOlga = 180;

if(wzrostOlga < wzrostMateusz) {

    console.log('Olga jest niższa od Mateusza');

} else if (wzrostOlga === wzrostMateusz) {

    console.log('Olga jest takiego samego wzrostu');

} else {

    console.log('Olga jest wyższa od Mateusza');

}


// switch - jeśli nie nie znajdzie breaka będzie wykonywał instrukcje aż nie znajdzie

let kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('kolor czerwony')
        break;
    case 'zielony':
        console.log('kolor zielony')
        break;
    case 'niebieski':
        console.log('kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}
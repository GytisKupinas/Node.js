"use strict";

function suma(a,b) {
    return a + b;
}

function sandauga(sk1, sk2) {
    return sk1 * sk2;
}

function atimtis(s1, s2) {
    return s1 - s2;
}

function skaiciuotuvas (pirmas, antras, veiksmas) {
    return veiksmas(pirmas, antras);
}

let dalyba = function (a, b) {
    return a / b;
};

console.log(skaiciuotuvas (2, 3, suma));
console.log(skaiciuotuvas(2, 3, sandauga));
console.log(skaiciuotuvas(2, 3, dalyba));

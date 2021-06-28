"use strict";

function skaiciai (sk) {
    sk = sk * sk;
    console.log(sk);
}

let s = 10;
skaiciai(s);
console.log(s);

function pasisveikinimas(zmogus) {
    console.log("labas " + zmogus.vardas + " " + zmogus.pavarde);
    zmogus.jauPasveikintas = true;
}

let z = {
    vardas: "Jonas",
    pavarde: "Jonaitis"
};
console.log(z);
pasisveikinimas(z);
console.log(z);

// function pasisveikinimas (vardas = "bevardis", pavarde = "bepavardis") {
//     console.log(arguments);
//     let str = "labas " + pavarde + " " + vardas;
//     if (arguments.length > 2) {
//         str += " titulai:"
//     }
//     for (let i = 2; i < arguments.length; i++) {
//         str += " " + arguments[i];
//     }
//     console.log(str);
// }


// pasisveikinimas("Jonas", "Jonaitis");
// pasisveikinimas("Jonas", "Jonaitis", "Imperatorius");
// pasisveikinimas("Jonas", "Jonaitis", "Imperatorius", "caras", "valdovas");
// pasisveikinimas(undefined, null, "Imperatorius", "caras", "valdovas");

// function suma() {
//     let s = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === "number") {
//             s += arguments[i];
//         }
//     }
//     return s;
// }

// function suma(a, b, c, d) {
//     console.log(a, typeof a);
//     console.log(b, typeof b);
//     console.log(c, typeof c);
//     console.log(d, typeof d);
//     console.log("----------");
//     let s = 0;
//     if (typeof a === "number") {
//         s += a;
//     }
//     if (typeof b === "number") {
//         s += b;
//     }
//     if (typeof c === "number") {
//         s += c;
//     }
//     if (typeof d === "number") {
//         s += d;
//     }
//     return s;
// }

// console.log(suma(1, 2, 3));
// console.log(suma(1, 2));
// console.log(suma(1));
// console.log(suma("labas", 2, 3));
// console.log(suma(1, "labas", 3));
// console.log(suma(1, 2, "labas"));
// console.log(suma(1, "labas"));
// console.log(suma());
// console.log(suma(1, 2, 3, 4));
// console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, "dfgsdfg", false));

// function suma(a, b) {
//     return a + b;
// }

// function sandauga(sk1, sk2) {
//     return sk1 * sk2;
// }

// function atimtis(s1, s2) {
//     return s1 - s2;
// }

// function skaiciuotuvas (pirmas, antras, veiksmas) {
//     if (typeof veiksmas === "function") {
//         return veiksmas(pirmas, antras);
//     } else {
//         console.log("nezinomas veiksmas");
//     }
//     return undefined;
// }


/*
undefined
number
string
object
boolean
function

*/

// let dalyba = function (a, b) {
//     return a / b;
// };

// dalyba = 7;
// console.log(typeof dalyba);
// console.log(skaiciuotuvas(2, 3, suma));
// console.log(skaiciuotuvas(2, 3, sandauga));
// console.log(skaiciuotuvas(2, 3, dalyba));


/*
Fibonacci skaiciu sekos spausdinimas iki nurodytos maksimalios reiksmes
Rekursine funkcija
1, 1, 20
1
1
2
3
5
8
13
*/

// let m = [
//     [
//         [1, 2, 3, 4, 5, 6],
//         [74, 23, 5, 7, 4],
//         [67, 4, 7, 3, 7, 9, 3]
//     ],
//     [
//         [6, 34, 67, 8, 4, 8],
//         [7, 4, 5],
//         [3, 6, 8, 0, 3, 89],
//         [3, 6, 2, 5, 7, 6, 3, 1]
//     ],
//     [
//         [1, 1, 1, 1, 4],
//         [2, 2, 2, 12],
//         [23],
//         [7, 4, 7, 5, 32, 8, 3]
//     ]
// ];
// console.log(m[2][3][2]);
/*
atspausdinti visu nelyginiu skaiciu suma ir vidurki
*/

/*



*/


// console.log("paradzia");
// function fib(sk1, sk2, max) {
//     console.log(sk1);
//     let next = sk1 + sk2;
//     if (next < max) {
//         fib(sk2, next, max);
//     } else {
//         console.log(sk2);
//     }
// }
// fib(1, 1, 10);
// console.log("pabaiga !!!!");
/*
parasyti funkcija labas(vardas, pavarde)
jei paduotas ir vardas ir pavarde - spausdina: labas vardas pavarde
jei paduotas tik vardas - spausdina: labas vardas
jei nieko nepaduota - spausdina: labas nezinomas zmogau
*/

// function faktorialas(sk) {
//     if (sk < 0) {
//         return -1;
//     }
//     if (sk === 0) {
//         return 1;
//     }
//     return sk * faktorialas(sk - 1);
// }

// function labas(vardas, pavarde) {
//     console.log("labas, " + vardas + " " + pavarde);
// }

// labas("Jonas", "Jonaitis");
// labas("Petras", "Petraitis");
// labas("Antanas");
// labas();
// labas("Jonas", "Petraitis", 10, "!", false);


// console.log(faktorialas(4));
// console.log(faktorialas(7));
// console.log(faktorialas(0));
// console.log(faktorialas(-10));
// console.log(faktorialas(-73));


// function didesnisSk(puokste) {
//     let max = puokste[0];
//     for (let x = 1; x < puokste.length; x++) {
//         if (puokste[x] > max) {
//             max = puokste[x];
//         }
//     }
//     return max;
// }

// function vidurkis(a) {
//     let suma = 0;
//     for (let i = 0; i < a.length; i++) {
//         suma += a[i];
//     }
//     return suma / a.length;
// }

// let m1 = [1, 2, 3, 4, 5];
// console.log(vidurkis(m1));

// // console.log(didesnisSk(m1));

// let bubu = [65, 78, -2, 4, 7];
// console.log(vidurkis(bubu));

// // console.log(didesnisSk(bubu));

// let meme = [165, 8, 2, -4, 17];
// console.log(vidurkis(meme));

// // console.log(didesnisSk(meme));

// let oj = [65, 45, 11];
// console.log(vidurkis(oj));

// // console.log(didesnisSk(oj));

// let ah = [0.1, 0.2, -1.2];
// console.log(vidurkis(ah));

// console.log(didesnisSk(ah));


// function didesnioSkaiciausKvadratas (a, b) {
//     let kv;
//     if (a > b) {
//         kv = a * a;
//     } else {
//         kv = b * b;
//     }
//     return kv;
// }

// let dsk = didesnioSkaiciausKvadratas(5, 3);

// console.log(dsk);


// function manoFunkcija (a, b) {
//     let s = a + b;
//     return s;
// }

// let sk1 = manoFunkcija(2, 3, 567, 2);
// console.log(sk1);

// let sk2 = manoFunkcija(10, 15);
// console.log(sk2);


// // function turis(r) {
// //     // cia komentaras
// //     let t = 4 * 3.14 * r * r * r / 3;
// //     return t;
// // }

// // let kamuoliukai = [3, 5.4, 2.3, 4.9, 0.1, 0.23];

// // for (let i = 0; i < kamuoliukai.length; i++) {
// //     console.log(turis(kamuoliukai[i]));
// // }

// // console.log(turis);

// // let didelisKamuolys = turis(945);

// // console.log(didelisKamuolys);



// // for (let i = 0; i < kamuoliukai.length - 1; i++) {
// //     for (let j = i + 1; j < kamuoliukai.length; j++) {
// //         if (turis(kamuoliukai[i]) > turis(kamuoliukai[j])) {
// //             let tmp = kamuoliukai[i];
// //             kamuoliukai[i] = kamuoliukai[j];
// //             kamuoliukai[j] = tmp;
// //         }
// //     }
// // }

// // for (let i = 0; i < kamuoliukai.length; i++) {
// //     console.log(turis(kamuoliukai[i]));
// // }

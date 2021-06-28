var nuo = 1;
var iki = 7;
// daugybos lentele su ciklais for

for (var i = nuo; i <= iki; i++) {
    for (var j = nuo; j <= iki; j++) {
        console.log(i*j);
    }
}

for (var i = 100; i > 0; i -= 3) {
    console.log(i);
}
// su ciklu for atspausdinti skaicius nuo 100 iki 1 kas 3
/*
100
97
94
91
...
*/

// for (var i = 1; i < 4; ++i) {
//     console.log(i);
// }


// var sk = 3;

// var kitas = 5 + ++sk;
// //            padidinam sk 1-u -> sk: 4
// //            paimam sk reiksme (4)
// //          5 + 4
// //            9
// //   i kitas padedam 9


// // var kitas = 5 + sk++;
// //            paimam sk reiksme (3) ir atsimenam
// //            padidinam sk 1-u -> sk: 4
// //          5 + 3
// //            8
// //   i kitas padedam 8


// console.log(sk);
// console.log(kitas);




// var i = 15;

// do {
//     console.log(i);
//     i += 4;
// } while (i<=10);

// while (i <= 10) {
//     console.log(i);
//     i += 4;
// }

console.log("Pabaiga");


/*


i += 2+3  ---> i =i+(2+3)
i -= 2+3  ---> i =i - (2+3)
i *= 2+3  ---> i = i * (2+3)
i /= 2+3  ---> i = i / (2+3)
i %= 2+3  ---> i = i % (2+3)



*/

// var kitas = 10 - ++sk + sk++ - ++sk;
//                padidinam sk 1-u -> sk: 4
//                paimam sk reiksme (4)
//                      paimam sk reiksme (4) ir atsimenam
//                      padidinam sk 1-u -> sk: 5
//                              padidinam sk 1-u -> sk: 6
//                              paimam sk reiksme (6)
//          10 - 4
//             6      + 4
//                   10      - 6
//                        4

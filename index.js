"use strict";
/*

a..Z A..Z 0..9 _ $

var bendraSaskaitosSuma123;


undefined
number
string
boolean true/false
object


*/
/*
0000    0   0
0001    1   1
0010    2   2
0011    3   3
0100    4   4
0101    5   5
0110    6   6
0111    7   7
1000    8   8
1001    9   9
1010    10  A
1011    11  B
1100    12  C
1101    13  D
1110    14  E
1111    15  F

\\ - \ (vienas simbolis)
\' - ' (vienas simbolis)
\" - " (vienas simbolis)
\t - TAB (kodas 09)
\n - LF line feed (kodas 0A arba 10)
\r - CR carridge return (kodas 0D arba 13)
\uxxxx - xxxx sesioliktainis simbolio kodas

var - kintamojo deklaravimas
= - reiksmes priskyrimas kintamajam

+ - sudetis
- - atimtis
* - daugyba
/ - dalyba
% - liekana

> - daugiau
< - maziau
>= - daugiau arba lygu
<= - maziau arba lygu
== - ar lygu
=== - ar lygu (strict)
!= - ar nelygu
!== - ar nelygu (strict)

&  && - AND - IR
|  || - OR - ARBA
^ - XOR - ARBA (paturbintas)
! - NOT - NE

*/

/*

11 % 3  = 2

*/

/*
suskaiciuoti visu skaiciu nuo 1 iki 100, kurie dalinasi is 3 suma


atspausdinti visus pirminius skaicius intervale nuo 2 iki 100

*/

var nuo = 2;
var iki = 4;

var i = nuo;
while (i <= iki) {
    var j = nuo;
    while (j <= iki) {
        console.log(i * j);
        j = j + 1;
    }
    i = i + 1;
}


console.log("pabaiga");



// var sk = 1;
// while (sk <= 100) {
//     if (sk % 5 === 0 || sk % 2 === 0) {
//         console.log(sk);
//     }
//     sk = sk + 1;
// }



// var suma = 0;
// var sk = 1;

// while (sk <= 100) {
//     suma = suma + sk;
//     sk = sk + 1;
// }

// console.log(suma);



// var sk1 = -56;

// // if (!(0 <= sk1 && sk1 <= 9)) {
// //   (0 <= -5            ) 
// //   ( false             ) 
// //   (            -5 <= 9) 
// //   (              true ) 
// //   ( false   &    true ) 
// //   (       false       ) 
// //          false
// //    ! false
// //     true
// if (0 > sk1 || sk1 > 9) {
//     console.log("ne - vienazenklis");
// }

// if (sk1 < 0) {
//     console.log("neigiamas");
// } else if (sk1 === 0) {
//     console.log("NULIS");
// } else if (sk1 < 10) {
//     console.log("mazas");
// } else if (sk1 < 100) {
//     console.log("vidutins");
// } else {
//     console.log("didelis");
// }


    // if (sk1 > 10) {
    //     console.log("didelis");
    // } else {
    //     console.log("mazas");
    // }


// var s1 = "15";
// var s2 = "5";

// console.log(s1 + s2);
// //          "15" + "5"
// //            "155"

// var sk1 = 15;
// var sk2 = 5;

// console.log(sk1 + sk2);
// //           15 + 5
// //              20

// console.log(sk1 + sk2 + s1 + s2);
// //          15  + 5
// //               20   + "15"
// //              "20"  + "15"
// //                  "2015" + "5"
// //                     "20155"


// console.log("" + sk1 + sk2 + s1 + s2);
// //          "" + 15
// //          "" + "15"
// //            "15"   + 5
// //            "15"   + "5"
// //                  "155" + "15"
// //                      "15515" + "5"
// //                          "155155"



// var sk1 = 15;
// var sk2;

// console.log(sk1);
// console.log(sk2);

// sk1 = 0.5;
// sk2 = 0.7;

// var sk3 = 0.2;

// var rez;

// rez = sk1 + sk2 * sk3 / sk1;
// //           7  / 2
// //             3.5    * 5
// //                 17.5
// //     5  +   17.5
// //       22.5
// //   <- 22.5
// /*
// / 15
// * 15
// + 14
// = 3

// */

// console.log(rez);
// /*
// 000  0  0
// 001  1  1
// 010  2  2
// 011  3  3
// 100  4  -4
// 101  5  -3
// 110  6  -2
// 111  7  -1


// 0000  0  0
// 0001  1  1
// 0010  2  2
// 0011  3  3
// 0100  4  4
// 0101  5  5
// 0110  6  6
// 0111  7  7
// 1000  8  -8
// 1001  9  -7
// 1010 10  -6
// 1011 11  -5
// 1100 12  -4
// 1101 13  -3
// 1110 14  -2
// 1111 15  -1

// 2^10 - kilo
// 2^20 = 2^10 * 2^10 - mega
// 2^30 = 2^10 * 2^10 * 2^10 - giga


// */
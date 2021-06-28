"use strict";

let m = [1, 2, 3, 4, 5];

let rez = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

for (let y = 0; y < rez.length; y++) {
  for (let x = 0; x < rez[y].length; x++) {
    rez[y][x] = m[(x + y) % m.length];
  }
}
console.log(rez);

// let m = [1, 2, 3, 4, 5];
// let rez = [
// [1, 2, 3, 4, 5],
// [5, 1, 2, 3, 4],
// [4, 5, 1, 2, 3],
// [3, 4, 5, 1, 2],
// [2, 3, 4, 5, 1]
// ];
// y: 5
// x: 5
for (let y = 0; y < rez.length; y++) {
  for (let x = 0; x < rez[y].length; x++) {
    rez[y][(x + y) % m.length] = m[x];
  }
}
console.log(rez);

/*
1 2 3 4 5
2 3 4 5 1
3 4 5 1 2
4 5 1 2 3
5 1 2 3 4

1 2 3 4 5
5 1 2 3 4
4 5 1 2 3
3 4 5 1 2
2 3 4 5 1
*/



let st = [
    [1, 2, 3, 5, 3, -4, 2],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9, 2, 6, -3, 67],
    [7, 8, 9, -12, 3, -18]
];
/*
atspausdinti kiekvienos eilutes elementu vidurki
atspausdinti visu elementu vidurki
*/

// for (let i = 0; i < st.length; i++) {
//     for (let j = 0; j < st[i].length ; j++) {
//         console.log(st[i][j]);
//     }
// }

// let m = [5, 87, -5, 3, -4, 107];

// //  0   1   2  3   4  5
// // [5, 87, -5, 3, -4, 107]
// // m.length: 6
// // i: 6
// // max: 107

// let max = m[0];
// for (let i = 1; i < m.length; i++) {
//     if (m[i] > max) {
//         max = m[i];
//     }
// }
// console.log(max);

/*
surusiuoti masyva didejimo tvarka
atspausdiniti
*/
/*
surusiuoti masyva mazejimo tvarka
atspausdiniti
*/



// for (let i = 0; i < m.length; i++) {
//     console.log(m[i]);
// }

// let suma = 0;
// for (let i = 0; i < m.length; i++) {
//     suma = m[i] + suma;
// }
// console.log(suma);

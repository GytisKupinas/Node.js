"use strict";

let m = [5, 87, -5, 3, -4, 107];

/*
    0   1  2   3   4   5
m: -5, -4, 3,  5,  87, 107
m.length: 6
*/

for (let i = 0; i < kamuoliukai.length - 1; i++) {
    for (let j = i + 1; j < kamuoliukai.length; j++) {
        if (kamuoliukai[i] > kamuoliukai[j]) {
            let tmp = kamuoliukai[i];
            kamuoliukai[i] = kamuoliukai[j];
            kamuoliukai[j] = tmp;
        }
    }
}
console.log(kamuoliukai);

for (let i = 0; i < kamuoliukai.length - 1; i++) {
    for (let j = i + 1; j < kamuoliukai.length; j++) {
        if (kamuoliukai[i] < kamuoliukai[j]) {
            let tmp = kamuoliukai[i];
            kamuoliukai[i] = kamuoliukai[j];
            kamuoliukai[j] = tmp;
        }
    }
}
console.log(kamuoliukai);

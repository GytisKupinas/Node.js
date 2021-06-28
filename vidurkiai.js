"use strict";

let st = [
    [1, 2, 3, 5, 3, -4, 2],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9, 2, 6, -3, 67],
    [7, 8, 9, -12, 3, -18]
];


let suma = 0;
let skKiekis = 0;
for(let y = 0; y < st.length; y++) {
    let eilutesSuma = 0;
    for(let x = 0; x < st[y].length; x++) {
        eilutesSuma += st[y][x];
        suma += st[y][x];
    }
    skKiekis += st[y].length;
    console.log(eilutesSuma / st[y].length);
}
console.log(suma / skKiekis);

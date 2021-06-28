let undef = undefined;
let sk = 10;
let o = {};
let f = function() {};
let str = "tekstas";
let b = false;

let n = null;

console.log(typeof undef);
console.log(typeof sk);
console.log(typeof o);
console.log(typeof f);
console.log(typeof str);
console.log(typeof b);

console.log(typeof n);

sk = "10";

if (typeof sk === "number") {
    console.log(sk * sk);
}

/*var i = 2;
 
while (i <= 10000) {
 var arPirminis = true;
 var atgal = i - 1;
 while (atgal >= 2 && arPirminis) {
 if (i % atgal === 0) {
 arPirminis = false;
 }
 atgal = atgal - 1;
 }
 if (arPirminis) {
 console.log(i);
 }
 i = i + 1;
}
*/


/*var nuo = 1;
var iki = 3;
var i = nuo;
while (i <= iki) {
    var j = nuo;
    while (j <= iki) {
        console.log(i * j);
        j += 1;
    }
    i += 1;
}
console.log("Pabaiga");
*/

/* var suma = 0;

  var sk = 1;

while (sk <= 100) {
    suma = suma + sk;
    sk = sk + 1;

}
console.log(suma);
*/

/* var sk = 1;
while (sk <= 100) {
    if (sk % 5 === 0) {
        console.log(sk);
        }
         sk = sk + 1;
}
*/

/* var sk = 1;
while (sk <= 100) {
    if (sk % 5 === 0 || sk % 2 === 0) {
        console.log(sk);
        }
         sk = sk + 1;
}
*/




var nuo = 1;
var iki = 3;

var i = 1;
while (i <= iki) {
    var j = 1;
    while (j <= iki) {
        console.log(i * j);
        j = j + 1;
    }
    i = i +1;
}

console.log("pabaiga");

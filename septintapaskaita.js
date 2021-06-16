/*console.log("pradzia");
{
let sk = 3;
console.log("komanda bloke", sk);
{
console.log("komanda vidiniam bloke");
sk++;
console.log("komanda 2 vidiniam bloke", sk);
}
sk = 15;
console.log("kita komanda bloke", sk);
}
console.log(sk);
console.log("pabaiga");
*/

console.log("pradzia");
 
{
 let sk = 3;
 console.log("komanda bloke", sk);
 {
 let sk = 7;
 let kitas = 5;
 console.log("komanda vidiniam bloke");
 sk = sk * kitas;
 console.log("komanda 2 vidiniam bloke", sk, kitas);
 }
 console.log(sk);
 sk = 17;
 console.log("kita komanda bloke", sk);
}
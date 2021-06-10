"use strict";
 
//var sk1;  
//var sk2;       // kintamuosiuose jeigu nieko nenurodai paraso Undifined , reismes tipai gali buti Undifined, number, string, boolean (dvi reiksmes- true ir false)
              // galima naudoti kintamuosius nuo a-z A-Z $ _ 0-9

              var tekstas = "Labas"; // kokiom kabutem pradejom tokiom ir turim baigti , viengubose kabutese galima irasyti ir dvigubas kabutes bet uzdarant vienguba kabute ir atvirksciai.
              //  ( /r - gryzti i eilutes pradzia. /n- persokti i nauja eilute zemyn). 
              tekstas = tekstas + " pasauli"; 

var b = true;   //naudojama loginems operacijoms 
var b1 = false;  

var sk1 = 55;


if (sk1 > 10) {      // riestiniai skliaustai skirti rasyti blokui , bet patartina rasyti visada blokus nors ir yra viena komanda 
  
console.log("didelis");
sk1 = sk1 * 10;
console.log(sk1);
}

else {
console.log("mazas");
console.log("dar viena komanda");
}
console.log("pabaiga");




var s1 = "15";
var s2 = "5";

console.log(s1 + s2);
//         "15" + "5"
//              "155"
var sk1 = 15;
var sk2 = 5;

console.log(sk1 + sk2);
//          15 + 5
//            20

console.log(sk1 + sk2 + s1 + s2);  // svarbus sudeties eiliskumas (is kaires i desine) nes pirmas veiksmas numberiai tada daro aritmetika -sudeda 
//          15 + 5    
//             20     + "15"       jeigu nors vienas is sudeties operandu yra ("stringas""textas") skaiciai bus verciami automatiskai i "stringa"
//             "20" + "15"
//             "2015" + "5"
//                "20155"


console.log("" + sk1 + sk2 + s1 + s2);
//          "" + 15
//          "" + "15"
//          "15"  + 5
//           "15" + "5"
//            "155" + " 15"
//             "15515" + " 5"
//            "155155"  rezultatas
console.log(s1 + s2 + sk1 + sk2); // nes pirmas veiksmas stringas , vercia toliau i stringa
//     "155" + "155" = 155155


console.log(tekstas);




//var TotalInvoiceSum       // KAMEL rasymo budas zodziu pavyzdys pradeda mazosiomis sekantys zodziai is didziosiomis  asEinuMiegoti

//sk1 = 0.5;
//sk2 = 0.7;

//var sk3 = 0.2;

            
//var rez;

//rez = sk1 + sk2 * sk3 / sk1;  // ima pagal tai kuiris veiksmas sturi aukstesni lygi, ziureti puslapyje, ta veiksma pirma ir atlikines. taisykles is desines i kaire ar is kaires i desine .

                          //     5 + 7        yra 2 tipu komentarai //-eiluteje visoje raso ir /* */- raso viduje iki uzdarumu skliaustu
                          /*
                          pasiziuriu kas yra saugoma sk1 ->5
                          pasiziuriu kas yra saugoma sk2 ->7
                           atliekam sudeti 5+7=12
                           12 -> rez
                           [1:13 PM] Aleksandras Novikovas(Alius)
var suma = 0;
var sk = 1;
while (sk <= 4) {​​​​​ 
  suma = suma + sk;
   sk = sk + 1;
  }​​​​​
   console.log(sk);
  console.log(suma);


   var - kintamojo deklaravimas
  = - reiksmes priskyrimas kintamajam
  + - sudetis 
  - - atimtis
  / - dalyba
  * - daugyba
  > - daugiau
  < - maziau
 >= - daugiau arba lygu
 <= - maziau arba lygu
 == - ar lygu
=== - ar lygu (strict)
 != - ar nelygu
!== - ar nelygu (strict)
*/                       
           //paimam reiksme is rez ->12. paimam reiksme is sk3 -> 4. padalinam 12 / 4 = 3. padedam gauti reiksme i rez
           /*

0000 0 0            
0001 1 1
0010 2 2
0011 3 3
0100 4 4
0101 5 5
0110 6 6
0111 7 7
1000 8 -8
1001 9 -7
1010 10 -6
1011 11 -5
1100 12 -4
1101 13 -3
1110 14 -2
1111 15 -1

2^10 - kilo
2^20 = 2^10 * 2^10 - mega
2^30 = 2^10 * 2^10 * 2^10 - giga

\ - \ (vienas simbolis)
\' - ' (vienas simbolis)
\" - " (vienas simbolis)
\t - TAB (kodas 09)
\n - LF line feed (kodas 0A arba 10)
\r - CR carridge return (kodas 0D arba 13)
\uxxxx - xxxx sesioliktainis simbolio kodas

var tekstas = 'c \u4EFB i\u0061 \\\\ y\tr\ta \"\'specialus\'\" tek\r\nstas';

0000 0 0
0001 1 1
0010 2 2
0011 3 3
0100 4 4
0101 5 5
0110 6 6
0111 7 7
1000 8 8
1001 9 9
1010 10 A
1011 11 B
1100 12 C
1101 13 D
1110 14 E
1111 15 F

           */



//console.log(rez);


/* pavizdys          visada rasyti {} 
var sk1 = 55;

if (sk1 > 10) {
    console.log("didelis");
}

else {
    console.log("mazas");
}


console.log("pabaiga");

*/
/*   pavizdys
var sk1 = -55;

if (sk1 < 0) {
    console.log("neigiamas");
}
else if (sk1 === 0) {
    console.log("NULIS");
}
else if (sk1 < 10) {
    console.log("mazas");
}
else if (sk1 < 100) {
    console.log("vidutinis");
}
else {
    console.log("didelis");
}

console.log("pabaiga");

*/
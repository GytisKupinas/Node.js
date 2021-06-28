/*
yra 8 masinos

pavadinimas
greitis: 0
kelias: 0

masinos lenktyniauja (ciklas)

kiekvienos iteracijos metu:
visos masinos gali pakeisti savo greiti
    random skaicius
    jei random < 0.2 - masina stabdo (t.y. mazeja masinos greitis 1..5 (random))
    jei random < 0.7 - masina gazuoja (t.y. dideja masinos greitis 1..10 (random))
    priesingu atveju masinos greitis nesikeicia
visos masinos pavaziuoja: per tiek, koks yra jos greitis

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

reikia surusiuoti masinas pagal nuvaziuota kelia,
    jei dvieju masinu kelias vienodas - pirmesne yra tu, kurios didesnis greitis

atspausdinti turnyrine lentele

*) kas 100 km spausdinti lyderi

*/

let atsitiktinis = Math.random();
// [0..1)
console.log(atsitiktinis);

let sveikasAts = Math.floor(atsitiktinis * 5 + 1);
// [1..5.99999999999999]
console.log(sveikasAts);

sveikasAts = Math.floor(Math.random() * 5 + 1);
console.log(sveikasAts);

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

// let atsitiktinis = Math.random();
// [0..1)
// console.log(atsitiktinis);

// let sveikasAts = Math.floor(atsitiktinis * 5 + 1);
// [1..5.99999999999999]
// console.log(sveikasAts);

// sveikasAts = Math.floor(Math.random() * 5 + 1);
// console.log(sveikasAts);


const masinos = [
    {
    pavadinimas: "pirma",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "antra",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "trecia",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "kevirta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "penkta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "sesta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "septinta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "astunta",
    kelias: 0,
    greitis: 0
    }
    ];
    let lenktyniaujam = true;
    let checkPoint = 100;
    do {
    // keiciam greiti
    for (let i = 0; i < masinos.length; i++) {
    let keiciamGreiti = Math.random();
    if (keiciamGreiti < 0.2) {
    masinos[i].greitis -= Math.floor(Math.random() * 5 + 1);
    if (masinos[i].greitis < 0) {
    masinos[i].greitis = 0;
    }
    } else if (keiciamGreiti < 0.7) {
    masinos[i].greitis += Math.floor(Math.random() * 10 + 1);
    }
    }
    // vaziuojam
    for (let i = 0; i < masinos.length; i++) {
    masinos[i].kelias += masinos[i].greitis;
    }
    // nustatom, kuris dabar pirmauja
    let lyderis = 0;
    for (let i = 1; i < masinos.length; i++) {
    if (
    (masinos[i].kelias > masinos[lyderis].kelias) ||
    (masinos[i].kelias === masinos[lyderis].kelias &&
    masinos[i].greitis > masinos[lyderis].greitis)
    ) {
    lyderis = i;
    }
    }
    // jei kirto check point'a - pranesam
    if (masinos[lyderis].kelias > checkPoint) {
    console.log("Po " + checkPoint + " km. pirmauja:");
    console.log(masinos[lyderis]);
    checkPoint += 100;
    }
    // tikrinam ar kas kirto finiso linija
    for (let i = 0; i < masinos.length; i++) {
    if (masinos[i].kelias >= 1000) {
    lenktyniaujam = false;
    }
    }
    } while (lenktyniaujam);
    // rusiuojam
    for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
    if (
    (masinos[i].kelias < masinos[j].kelias) ||
    (masinos[i].kelias === masinos[j].kelias &&
    masinos[i].greitis < masinos[j].greitis)
    ) {
    let tmp = masinos[i];
    masinos[i] = masinos[j];
    masinos[j] = tmp;
    }
    }
    }
    console.log(masinos);
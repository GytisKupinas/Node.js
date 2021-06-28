"use strict";

let puodukas = {
    turis: 300,
    kiekis: 100,
    gerimas: "arbata"
};


let s = "gatve";

let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    adresas: {
        miestas: "Vilnius",
        gatve: "Gedimino",
        namas: 9
    }
};

console.log(zmogus.adresas.gatve);

console.log(zmogus["adresas"].namas);

console.log(zmogus["adresas"][s]);

console.log(zmogus.adresas["miestas"]);

let puodukas = {
    turis: 300,
    kiekis: 200,
    spalva: "rudas"
};

// console.log(puodukas.medziaga);

// puodukas.gerimas = "kava";

// delete puodukas.spalva;

// console.log(puodukas);

// puodukas["medziaga"] = "stiklas";

let prop = "kiekis";

console.log(puodukas[prop]);

// console.log(puodukas);

// // // let puodukas = {};
// // // puodukas.turis = 300;
// // // puodukas.kiekis = 200;
// // // puodukas.spalva = "rudas";

// // console.log(puodukas.gerimas);

// // puodukas.gerimas = "kava";

// // console.log(puodukas.gerimas);

// // console.log(puodukas);


// // // puodukas.kiekis -= 50;

// // // console.log(puodukas.kiekis);
// // // console.log(puodukas.spalva);

// // // let taspatsPuodukas = puodukas;

// // // taspatsPuodukas.spalva = "zalias";
// // // taspatsPuodukas.kiekis += 100;

// // // taspatsPuodukas = {
// // //     turis: 300,
// // //     kiekis: 250,
// // //     spalva: "zalias"
// // // };

// // // console.log(puodukas);
// // // console.log(taspatsPuodukas);

// // // if (puodukas === taspatsPuodukas) {
// // //     console.log("tas pats puodukas");
// // // } else {
// // //     console.log("kitas objektas");
// // // }

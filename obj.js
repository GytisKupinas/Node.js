"use strict";

function Masina(pavadinimas) {
    this.pavadinimas = pavadinimas;
    this.kelias = 0;
    this.greitis = 0;
}
Masina.prototype.gazas = function(kiek) {
    this.greitis += kiek;
};
Masina.prototype.stabdis = function(kiek) {
    this.greitis -= kiek;
    if (this.greitis < 0) {
        this.greitis = 0;
    }
};
console.log(Masina.prototype);

let masina1 = new Masina("pirma");
let masina2 = new Masina("antra");

console.log(masina1);
console.log(masina2);

masina1.gazas(15);
masina2.gazas(3);

console.log(masina1);
console.log(masina2);

/*
sukurti puoduko konstruktoriu

kiekvienas puodukas turi tureti spalva, kieki ir max turi

puodukai turi moketi:
isgerti(kiek) - negalima isgerti daugiau negu yra puoduke
ipilti(kiek) - negalima, kad puoduke butu daugiau negu telpa

sukurti kelis puodukus
ir ipilti, isgerti ir paziureti, kaip tai veikia

*/

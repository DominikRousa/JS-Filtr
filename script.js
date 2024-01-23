const produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

const max = produkty.reduce((acc, item) => acc = acc > item.cenaZaKus ? acc : item.cenaZaKus, 0);
const result = produkty.filter(produkt => produkt.cenaZaKus === 500);

console.log('Nejdražší je ' + result[0].nazev + ' a jeho cena je ' + max);

function filtrIt(){
    const fValue = parseInt(document.getElementById('filtrInp').value);

    const filtr = produkty.filter(produkt => produkt.pocetNaSklade <= fValue);

    for (let i = 0; i < filtr.length; i++) {
        console.log(filtr[i].nazev)
        const deleteButton = document.createElement("li");
        deleteButton.innerText = filtr[i].nazev;
    }
}
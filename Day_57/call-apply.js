const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDe: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('Here the result: ', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Golam'
}
// call
// kibria.treatDe.call(heroBalam, 500, 50, 50);
// kibria.treatDe.call(heroBalam, 700, 150, 70);

kibria.treatDe.apply(kibria, [500, 100, 50])
kibria.treatDe.apply(heroBalam, [1000, 200, 100])

kibria.treatDe.apply(normalGolam, [1000, 200, 50])
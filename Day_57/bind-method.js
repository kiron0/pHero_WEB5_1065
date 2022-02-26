const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDe: function (expense) {
        this.money = this.money - expense;
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

kibria.treatDe(100);
const heroTreatDe  = kibria.treatDe.bind(heroBalam);
heroTreatDe(500);
heroTreatDe(300);
heroTreatDe(500);
kibria.treatDe(400);
const normalTreatDe = kibria.treatDe.bind(normalGolam);
normalTreatDe(500);
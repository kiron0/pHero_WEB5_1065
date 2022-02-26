// console.log(this)

const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDeArrow: () => {
        console.log('treatDeArrow' ,this);
    },
    treatDeInside: function () {
        const myArrow = () => console.log('treatDeInside' ,this);
        myArrow();
    },
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

kibria.treatDe();
kibria.treatDeArrow();
kibria.treatDeInside();
// kibria.treatDe.apply(kibria, [500, 100, 50])
// kibria.treatDe.apply(heroBalam, [1000, 200, 100])

// kibria.treatDe.apply(normalGolam, [1000, 200, 50])

function add() {
    console.log(this);
}

const nayok = {name: 'hero', age:'28', isMarried: false};
console.log(Object.entries(nayok))

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name";
console.log(getGirlFriend()); 
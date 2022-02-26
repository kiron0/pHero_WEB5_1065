// 1. using object literal
const student = { name: 'Sakib Al Hasan', job: 'Cricketer' };
// 2. constructor
const person = new Object();

// 3.
// const human = Object.create(student)
const human = Object.create(student)
// console.log(human.job);

// 4. class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manush', 12);
// console.log(peop);

// 5. function
function Manush(name){
    this.name = name;
}
const man = new Manush('Kader')
console.log(man);
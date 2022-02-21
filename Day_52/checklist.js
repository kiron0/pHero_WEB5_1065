// Task 01
const jaanTush = 'Haju';
let friend = 'Shakil';

// Task 02
const fullSentence = `My love name is ${jaanTush} and my friend name is ${friend}`;
// console.log(fullSentence);

// Task 03.1
const division = num => num / 5;
// console.log(division(60));

// Task 03.2
// function mathOperation(num1, num2) {
//     const add1 = num1 + 2;
//     const add2 = num2 + 2;
//     const math = add1 * add2;
//     return math;
// }
const mathOperation = (num1, num2) => (num1 + 2) * (num2 + 2);
// console.log(mathOperation(10, 20));

// Task 03.3
const mathOperation2 = (num1, num2, num3) => num1 * num2 * num3;
// console.log(mathOperation2(10, 20, 30));

// Task 03.4
const mathOperation3 = (num1, num2) => {
    math2 = (num1 + 2) * (num2 + 2);
    return math2;
}
// console.log(mathOperation3(5, 6, 7));

// Task 5
const numbers = [2, 5, 3, 8, 9, 7, 5, 4];
const output = numbers.map(x => x * 5);
// console.log(output);

const numbers2 = [54, 655, 98, 64, 87, 32];
const output2 = numbers2.map(x => x * 10);
// console.log(output2);

// Task 6
const numbers3 = [1, 2, 5, 3, 8, 9, 7, 5, 4];
const even = numbers3.filter(x => x % 2 !== 0);
// console.log(even);

// Task 7
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];

const findPrice = products.find(product => product.price == 5000);
// console.log(findPrice);

// Task 8
const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 9000,
    phone: '017632131211',
    address: 'Chandpur',
    dress: 'silver',
    no: {
        id1: 01,
        id2: 02,
        id3: 04,
    }
};

const { phone, price } = fish;
// console.log(phone, price);

// Task 9


// Task 10
function mathOperation4(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
// console.log(mathOperation4(15, 35));

// Optional
// Task 11

// Task 12




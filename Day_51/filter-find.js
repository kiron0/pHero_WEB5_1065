const numbers = [5, 12, 27, 41, 30, 22, 5, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(bigNumbers, smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];

const expensive = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == 'black');
const whites = products.find(product => product.color == 'white');

// console.log(expensive);
// console.log(blacks);
// console.log(whites);
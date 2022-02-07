const numbers = [44, 23, 534, 32, 54, 5, 75];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

// const totalSum = arrayTotal(numbers);
const totalSum = arrayTotal([32, 45, 47]);
console.log('Array Total', totalSum);
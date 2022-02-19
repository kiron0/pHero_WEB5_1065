const add = (num1, num2) => num1 + num2;

const division = (num1, num2, num3) => num1 / num2 / num3;

const tenTimes = (num) => num * 10;

const fiveTimes = num => num * 5;

const getName = () => 'Brandon Sam';

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const sum = add(22, 90);
const result = division(4, 12, 3);
const output = tenTimes(17);
const value = fiveTimes(17);
const name = getName();
const total = doMath(12, 5);
console.log(total);

document.getElementById('my-btn').addEventListener(event => {

})
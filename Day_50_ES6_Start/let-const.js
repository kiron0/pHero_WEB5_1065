// break-up with var
// const balance = 1240;
// balance = 1340;

let balance = 1240;
balance = 1340;

const userName = 'janpakhi potash potash';
const weTogether = 'ami' + userName;
// console.log(weTogether);
userName = 'Moyna Pakhi';


const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 23, 54]; // not allowed
numbers.push(666);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}

const student = { roll: 101, name: 'mofiz', job: 'intern' };
// student.name = 'Mofazzol';
student = { name: 'mofazzol' };
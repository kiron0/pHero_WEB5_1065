// 1. let and const
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy s17';

// 2. default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3. template string
const myNotes = `I am mojnu of ${hubby}. I don't have a ${phone}`;
// console.log(myNotes);

// 4. arrow function
const add = () => {

}

// function square(x) {
//     return x * x;
// }

const square = x => x * x;
console.log(square(13));

// 5. spread or three dots
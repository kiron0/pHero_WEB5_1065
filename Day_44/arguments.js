function addNumbers() {
    // console.log(arguments[1]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // arguments.push(45);
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 420);
// console.log(sum);

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Sanket', 'Bin', 'Hanif', 'Sanket', 'Bin', 'Tomuk', 'Sanket', 'Bin', 'Komuk', 'Sanket');
console.log(name);
// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log("Factorial result is:", factorial);

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log("Factorial of 7 is:", firstFactorial);

var secondFactorial = getFactorial(9);
console.log("Factorial of 9 is:", secondFactorial);

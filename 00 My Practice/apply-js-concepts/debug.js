function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        // for (let i = 0; i <= number; i++) {
        factorial = factorial * i;
        // factorial = factorial + i;
    }
    return factorial;
}

const getMyFactorial = getFactorial(8);
console.log(getMyFactorial);
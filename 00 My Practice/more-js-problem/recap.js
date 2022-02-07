/* function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
}

function smallestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
} */

function leapYear(year) {
    const reminder = year % 4;
    if (reminder == 0) {
        return true;
    }
    else {
        return false;
    }
}

const yearResult = leapYear(2004);
console.log(yearResult);
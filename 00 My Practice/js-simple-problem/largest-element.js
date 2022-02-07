// find the largest element of an array
function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -17]);
console.log(oldest2);

// Task find the lowest element of an array
function smallestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const rolls = [12, 4, 13, 9, 45, 75, 39, 78, 48, 54];
const smallestOne = smallestElement(rolls);
console.log(smallestOne);
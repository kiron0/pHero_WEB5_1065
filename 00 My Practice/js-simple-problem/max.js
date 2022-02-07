const business = 450;
const minister = 350;
const army = 600;

// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('Minister er pola is bigger');
// }

// compare 3
/* if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('Minister is bigger');
}
else {
    console.log('Army is bigger');
} */

var max = Math.max(business, minister, army);
// console.log('Largest is', max);

// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     }
//     else {
//         return second;
//     }
// }

// const largest = findLargest(125, 250);
// console.log('Largest is', largest);

// Task 1 : write a function to find the largest of three numbers

function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > third && second > first) {
        return second;
    }
    else {
        return third;
    }
}

const largest = findLargest(25, 15, 14);
// console.log('The largest number is', largest);



// Task 2 : write a function to find the smallest of three numbers

function findSmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}

const smallest = findSmallest(10, 4, 17);
console.log('The smallest number is', smallest);
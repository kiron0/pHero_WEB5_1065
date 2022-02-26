/*
1. variable value is not defined
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exists in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value of undefined
9. 
*/
let first;
// console.log(first);

function second(x, y) {
    const sum = x + y;
}
// console.log(second(10, 32));

function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}
// console.log(add(2, 7));

function double(a, b) {
    const result = a * 2;
    console.log(b);
    return result
}
// console.log(double(21))

const fifth = { name: 'sogir', age: 15, location: 'bandorban' };
// console.log(fifth.phone);

const sixth = [54, 21, 36, 45, 98];
// console.log(sixth[5]);
delete sixth[2];
// console.log(sixth[2]);

const eigth = undefined;
// console.log(eigth);

const myObj = { name: 'samad', profession: null };
// console.log(myObj);


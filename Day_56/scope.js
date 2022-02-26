const favNum = 27;

function add(first, second) {
    const result = first + second;
    // console.log(result);
    // console.log(favNum);
    if (result > 9) {
        const mood = 'happy';
        console.log(mood)
    }
    return result;
}
const sum = add(21, 35);
console.log(sum);
// console.log(favNum);
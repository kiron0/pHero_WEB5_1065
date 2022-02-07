/* var first = 5;
var second = 7;
console.log(first, second);
// first approach
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// destructuring
[first, second] = [second, first];
console.log(first, second); */

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count)

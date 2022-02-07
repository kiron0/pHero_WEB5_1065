// 1. variable
var favouriteBooks = '4 hour work week';

// 2. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';
bookList.push('Small Giants');
bookList.pop();

// 3. conditionals
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}

// 4. loop
// while loop
var i = 0;
while (i < 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;
}

// for loop
for (var i = 0; i < 15; i++) {
    console.log(i);
}
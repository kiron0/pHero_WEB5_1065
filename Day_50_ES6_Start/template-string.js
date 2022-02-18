const priya = 'Asif Akbar';
const meye = 'Meye tumi dukkho chino';
const kobita = 'kobita tumi shopno charini';
const multiLine = 'This is my first line\n ' +
    'this is second line\n' +
    'this is third line\n' +
    'this is fourth line\n';
// console.log(multiLine);

const multiLineNew = `This is my first line
this is second line
this is third line
this is fourth line
`;
// console.log(multiLineNew);

const friends = ['abul', 'babul', 'kabul', 'sabul'];

const count = 5;
const old1 = '<h3 class="friend-name">Friend-4</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>'
const new1 = '<h3 class="friend-name">Friend-${count}</h3>';
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is : ${first} ${last}. Has money ${friends.length * 500}`;

console.log(new1);
console.log(fullNew);
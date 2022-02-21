// declare variable based on the of an object property
const myObejct = { x: 2, y: 50, z: 600, a: 25, b: 25, c: 54 };
const { x, b } = myObejct;
// console.log(x, b);
console.log('myObject.p', myObejct?.p?.q);

// destructuring array
const [p, q] = [45, 39, 91, 86];
// console.log(p, q);

// const [best, faltu] = [45, 56];
const [best, faltu] = ['ayshu', 'kutti'];
// console.log(best, faltu);
const { sky, color, soil } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 };
// console.log(sky, color, soil);

// chaining

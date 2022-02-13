const myFavouriteDate = new Date('1971-12-16');
// console.log(myFavouriteDate);
const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
// console.log(anotherDate);

if (myFavouriteDate.getTime() < anotherDate.getTime()) {
    console.log('favourite is earlier');
}

// https://momentjs.com/
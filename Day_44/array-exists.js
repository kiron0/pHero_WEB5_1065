function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

if (friends.indexOf('Fox') != -1) {
    console.log('Lion exits');
}
else {
    console.log("Fox doesn't exits");
}

// includes
if (friends.includes('Lion')) {
    console.log('Lion exits in includes')
}

// concatination = concat
const first = [1, 2, 3];
const second = [4, 5, 6, 7, 8, 9, 10];
const combined = first.concat(second);
console.log(combined);
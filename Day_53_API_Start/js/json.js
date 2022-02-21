// Javascript Object Notation
// JSON
const user = { id: 11, name: 'Gorib Amar', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actress',
    },
    isExpensive: false,
};

const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
// console.log(shop);
// console.log(shop.products[1]);
// console.log(shop.owner);
console.log(shopStringified);
console.log(converted.products);
const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'samsung galaxy 14', price: 60000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lonovo yoga laptop', price: 55000 },
    { name: 'Asus afsus laptop 1', price: 35000 },
    { name: 'smart watch samsung', price: 70000 },
    { name: 'apple watch', price: 20000 },
    { name: 'plus one phone 4', price: 27000 },
];

function searchProducts(products, searcText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searcText)) {
            result.push(product);
        }
    }
    return result;
}
const matched = searchProducts(products, 'phone');
console.log(matched);
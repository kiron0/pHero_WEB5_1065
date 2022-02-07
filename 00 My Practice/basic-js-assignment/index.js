// Problem 1
function anaToVori(ana) {
    const vori = ana / 16; // as 1 vori = 16 ana
    if (ana !== 'number' && ana < 0)
        return vori;
    else return 'Ana can not be negative';
}
// console.log(anaToVori(128)); // 8

// Problem 2
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    const perSingara = 7;
    const perSomucha = 10;
    const perJilapi = 15;

    if (
        singaraQuantity < 0 ||
        somuchaQuantity < 0 ||
        jilapiQuantity < 0 ||
        singaraQuantity % 1 != 0 ||
        somuchaQuantity % 1 != 0 ||
        jilapiQuantity % 1 != 0
    ) {
        return 'Sorry, Please make sure to input all the values that are positive integer.'
    }
    else {

        // food quantity calculation
        const totalSingaraQuantity = singaraQuantity * perSingara;
        const totalSomuchaQuantity = somuchaQuantity * perSomucha;
        const totalJilapiQuantity = jilapiQuantity * perJilapi;

        // adding all the food quantity
        const totalCost = totalSingaraQuantity + totalSomuchaQuantity + totalJilapiQuantity;

        return totalCost;
    }
}
const firstOrder = pandaCost(2, 3, 5);
// console.log(firstOrder); // 119

// Problem 3
function picnicBudget(members) {
    const picnicBudget = members * 5000;
    if (members < 0 || typeof members !== 'number') {
        return 'Members can not be negative';
    }
    else if (members <= 200) {
        const newMembers = members - 100;
        const picnicBudgetFor100Up = newMembers * 4000;
        return picnicBudgetFor100Up + (100 * 5000); // picnicBudgetFor100 = 100 * 5000;
    }
    else if (members > 200) {
        const newMembers = members - 200;
        const picnicBudgetFor200Up = newMembers * 3000;
        return picnicBudgetFor200Up + (100 * 5000) + (100 * 4000); // picnicBudgetFor100Up = 100 * 4000 && picnicBudgetFor200Up = 100 * 3000;
    }
    else return picnicBudget;
}
// console.log(picnicBudget(232)); // 996000

// Problem 4
function oddFriend(friendList) {
    for (let i = 0; i < friendList.length; i++) {
        if (friendList[i].length % 2 != 0 && typeof friendList[i] === "string")
            return (friendList[i]);
        else return 'Array can only be string';
    }
    return oddFriend[0];
}
// console.log(oddFriend(['Kiron', 'Toufiq', 'Shawon', 'Mou', 'Ratul', 'Rakibul', 'Tasnim'])); // Kiron
// console.log(oddFriend([25, 574, 895, 254])); // Array can only be string
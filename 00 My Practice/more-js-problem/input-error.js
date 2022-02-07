/* function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
// const firstTotal = add(63, 67);
// console.log(firstTotal);

const secondTotal = add(54, 981);
// const secondTotal = add(54 + 981);
// console.log(secondTotal);

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const firstTotal = multiply(15, 20);
// const firstTotal = multiply(15 * 20);
console.log(firstTotal);
 */

/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuanity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuanity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);

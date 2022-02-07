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
console.log(picnicBudget(332)); // 996000
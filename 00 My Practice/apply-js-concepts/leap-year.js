function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2087;
const isMyYear = isLeapYear(myYear);
console.log("Is my leap year:", isMyYear);

const yourYear = 2224;
const isYourYear = isLeapYear(yourYear);
console.log("Is your leap year:", isYourYear);
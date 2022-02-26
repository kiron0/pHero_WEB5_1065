function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Braddy', 'Tom Cruise']
// const myObj = { name: 'Tom Chinku', age: 11 }
function greetMorning(name) {
    console.log('Good Morning', name)
}
function greetAfternoon(name) {
    console.log('Good Afternoon', name)
}
function greetEvening(name) {
    console.log('Good Evening', name)
}
welcomeMessage('Tom Hanks', greetMorning)
welcomeMessage('Sakib Hanks', greetAfternoon)
welcomeMessage('Sogir Hanks', greetEvening)
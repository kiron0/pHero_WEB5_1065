var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuits = 10;
var myBudget = 100;
var packedWell = false;

// if (danishPrice < myBudget) {
//     console.log('Danish kheye danish jabo');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('Button bon diye cha khabo');
// }
// else if (toastBiscuits < myBudget) {
//     console.log('Toast Biscuits diye cha khabo');
// }
// else {
//     console.log('Batasha diye cha khamu');
// }

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('Danish khabo');
    }
    else {
        console.log('Danish khabo na! karon ami khawar age machi kheye felse ordhek');
    }
}
function makeRed() {
    document.body.style.backgroundColor = 'Red';
}

// handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
// just set the name of a function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'Blue';
}

// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
// anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'Green';
}

// handle by usingh addEventListner
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEventListner
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('make-light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})

// using function
function handleJustFunctionClick() {
    const p = document.getElementById('clicking-method');
    p.innerText = 'set by using function';
}

// direct
document.getElementById('handle-event').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = 'set by direct add event listener';
})
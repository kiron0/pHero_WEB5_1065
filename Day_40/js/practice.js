// document.getElementById('hot-pink-btn').addEventListener('click', function () {
//     document.body.style.backgroundColor = 'hotpink';
// })

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

document.getElementById('hot-pink-btn').addEventListener('click', () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});

document.getElementById('hot-pink-btn').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
});
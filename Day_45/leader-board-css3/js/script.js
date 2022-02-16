document.getElementById('top-player').style.color = 'black';
document.getElementById('top-blog').style.color = 'gray';

const players = document.querySelectorAll('.player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(39, 93, 245, 0.8)';
    player.style.borderRadius = '10px';
    player.style.padding = '5px';
}

const inputButton = document.getElementById('plus-btn')
function increasingValue(isIncreasing) {
    const inputValue = document.getElementById('input-value');
    const inputNumber = inputValue.value;
    if (isIncreasing) {
        inputValue.value = parseInt(inputNumber) + 1;
        if (inputValue.value == 5) {
            inputValue.style.button = 'disabled';
        }
    }
    else if (inputNumber > 0) {
        inputValue.value = parseInt(inputNumber) - 1;
    }
}

document.getElementById('plus-btn').addEventListener('click', function () {
    increasingValue(true);
})

document.getElementById('minus-btn').addEventListener('click', function () {
    increasingValue(false);
})
// Task 01
// console.log('Hello I am from external js file!');

// Task 02
const titleHead = document.getElementsByTagName('h2');
for (const h2 of titleHead) {
    h2.style.color = 'lightblue';
}

// Task 03
document.getElementById('backpack').style.backgroundColor = 'tomato';
document.getElementById('backpack').style.padding = '20px';

// Task 04
const cardSection = document.getElementsByClassName('card');

for (const card of cardSection) {
    card.style.borderRadius = '30px';
}

// Task 05


// Task 06


// Task 07
document.getElementById('email-confirm').addEventListener('keyup', function (event) {
    const submitBtn = document.getElementById('submit-btn');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
});


document.getElementById('email-confirm').value = '';


// Task 08



// Task 09
function doubleClick() {
    document.getElementById('doubleClickTap').style.backgroundColor = 'hotpink';
}
document.getElementById('doubleClickTap').addEventListener('blur', function () {
    document.style.backgroundColor = 'white';
});

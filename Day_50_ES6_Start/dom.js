document.getElementById('add-border').addEventListener('click', function () {
    // console.log('border clicked')
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid red';
    container.style.borderRadius = '10px';
    container.style.padding = '10px';
});

function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
        // friend.style.color = 'white';
        friend.style.borderRadius = '5px';
        friend.style.padding = '10px';
        friend.style.margin = '10px';
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>Lorem ipsum dolor sit amet.</p>
    `;
    container.appendChild(friendDiv);
})

// const y = x => x*x;
// const z = y(5);

// const numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(Math.max(...numbers));

// const cars = ['toyota', 'honda', 'mercedes'];
// const newCars = [...cars, 'ferrari'];
// console.log(newCars);

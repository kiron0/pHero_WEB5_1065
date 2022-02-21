// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/3')
        .then(res => res.json())
        .then(data => console.log(data));
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => displayUsers(users));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

function displayUsers(users) {
    const ul = document.getElementById('users');
    for (const user of users) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `ID: ${user.id} \n Name: ${user.name} \n Username: ${user.username} \n Email: ${user.email} \n Phone: ${user.phone} \n Website: ${user.website}`;
        ul.appendChild(li);
    }
}
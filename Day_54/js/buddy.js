const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        // console.log(buddy.name.title)
        // console.log(buddy.email)
        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} \nPhone: ${buddy.phone}\nEmail: ${buddy.email}\n<img src="${buddy.picture.large}" alt="">
        `;
        buddiesDiv.appendChild(p);
    }
}
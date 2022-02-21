function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}
loadAlbums();

function displayAlbums(albums) {
    const albumsContainer = document.getElementById('albums');
    // console.log(albums);
    for (const album of albums) {
        const p = document.createElement('p');
        p.innerHTML = `
        <h3>ID: ${album.id}</h3>
        <p>User ID: ${album.userId}</p>
        <p>Title: ${album.title}</p>
        `;
        p.style.textAlign = 'center';
        p.style.backgroundColor = 'bisque';
        p.style.padding = '10px';
        p.style.margin = '10px';
        p.style.borderRadius = '20px';
        albumsContainer.appendChild(p);
    }
}

const stuInfo = JSON.stringify({
    name: "James",
    roll: 3
});
// console.log(stuInfo.name); 

const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }
const { brand } = premikas.cars;
// console.log(brand);


const info = { data: [{ language: "Javascript", library: "React" }] }
console.log(info.data[0].library);
const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

const displayPhotos = photos => {
    console.log(photos);
    const commentsDiv = document.getElementById('show-photos');
    const first30Data = photos.slice(0, 30);

    for (const photo of first30Data) {
        const div = document.createElement('div');
        div.className = 'col-lg-4';
        div.innerHTML = `
                <h2>No: ${photo.id}</h2>
                <h3>${photo.title}</h3>
                <img src="${photo.thumbnailUrl}" alt="">
                <!-- <img src="${photo.url}" alt=""> -->
                `;
        commentsDiv.appendChild(div);
    }
    // photos.forEach(photo => {
    //     const div = document.createElement('div');
    //     div.classList = 'col-lg-4';
    //     div.innerHTML = `
    //     <h2>No: ${photo.id}</h2>
    //     <h3>${photo.title}</h3>
    //     <img src="${photo.thumbnailUrl}" alt="">
    //     <!-- <img src="${photo.url}" alt=""> -->
    //     `;
    //     commentsDiv.appendChild(div);
    // });
}
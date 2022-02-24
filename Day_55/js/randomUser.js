const loadUser = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayLocationDetails(data.results));
}
const displayLocationDetails = (details) => {
    // console.log(details);
    const showDetails = document.getElementById('show-location');
    details.forEach(detail => {
        // console.log(detail.location);
        const div = document.createElement('div');
        div.classList.add('details');
        div.innerHTML = `
        <p>City: ${detail.location.city}</p>
        <p>Country: ${detail.location.country}</p>
        <p>Co-Ordinates- latitude: '${detail.location.coordinates.latitude}', longitude: '${detail.location.coordinates.longitude}'</p>
        <p>Time Zone- description: ${detail.location.timezone.description}, offset: ${detail.location.timezone.offset}</p>
        `;
        showDetails.appendChild(div);
    })
}

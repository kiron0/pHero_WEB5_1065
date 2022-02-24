const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
// loadQuotes();
const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
    quoteElement.style.backgroundColor = 'aqua';
    quoteElement.style.margin = 'auto';
    quoteElement.style.marginTop = '20px';
    quoteElement.style.padding = '30px';
    quoteElement.style.borderRadius = '20px';
    quoteElement.style.fontWeight = '800';
    quoteElement.style.width = '50%';
}

// const data = { result: [{ userName: { title: 'Mr.', name: "sakib khan" } }] };
// // console.log(data.result[0].userName.name)

// const p = [1, 2, 3];
// const q = p.map(n => Math.pow(n, 3));
// // console.log(q)

// const info = { name: "", phoneNumber: null };
// // console.log(JSON.stringify(info));

// const array = { hobbies: ["dancing", "singing", "acting"] };
// // console.log(JSON.stringify(array));

// // console.log(JSON.stringify({ eventName: "birthday", date: new Date() }));

// const para = document.getElementById("p");
// para.innerText = '';
// para.innerHTML = '';

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
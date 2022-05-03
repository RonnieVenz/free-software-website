// Switch para modo oscuro

const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('change', () => {
    let mainContent = document.body;
    mainContent.classList.toggle('dark');
});

// API de Cita de autor

let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('get-quote')

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);


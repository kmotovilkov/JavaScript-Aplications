const url = 'https://swapi.dev/api/people/';

const httpRequest = new XMLHttpRequest();
httpRequest.addEventListener('loadend', function () {
    let response = JSON.parse(this.responseText);
    let character=response.results;
    const characters = document.querySelector('.characters');
    characters.innerHTML = character.map(ch=>`<li>${ch.name}</li>`).join('');
});
httpRequest.open('GET', url);
document.getElementById('load')
    .addEventListener("click", function () {
        httpRequest.send();

    });


document.getElementById('load').addEventListener("click", function () {
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
        let character = data.results;
        const characters = document.querySelector('.characters');
        characters.innerHTML = character.map(ch => `<li>${ch.name}</li>`).join('');


    });
});

function loadRepos() {
    const httpRequest = new XMLHttpRequest();
    const user = document.getElementById('username');
    const reposEl = document.getElementById('repos');

    httpRequest.addEventListener('loadend', function () {
        let repos = JSON.parse(this.responseText);

        reposEl.innerHTML = repos.map(r => `<li><a href="${r.html_url}" target="_blank">${r.name}</a></li>`).join('');
    });

    const url = `https://api.github.com/users/${user.value}/repos`;
    httpRequest.open('GET', url);
    httpRequest.send();
}
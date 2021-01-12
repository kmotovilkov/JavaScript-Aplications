function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(res => (res).json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let commitsData = `${data[i].commit.author.name}: ${data[i].commit.message}`;
                let li = document.createElement('li');
                li.innerText = commitsData;
                commits.appendChild(li);
            }
        })
        .catch(err => {
            commits.innerHTML = `<li>${err.status} (${err.statusText})</li>`;
        });
}
function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json';

    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', function () {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                let result = Object.values(data).reduce((messages, message) =>
                    (messages += `${message.author}: ${message.content}\n`), ''
                );

                document.getElementById('messages').textContent = result;
            });
    });

    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener("click", function () {
        let author = document.getElementById('author');
        let content = document.getElementById('content');
        fetch(url, {
            method: "POST",
            body: JSON.stringify({author: author.value, content: content.value}),
        });
        author.value = "";
        content.value = "";
    });
}

attachEvents();
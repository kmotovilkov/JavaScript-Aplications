function attachEvents() {
    const url = "https://phonebook-nakov.firebaseio.com/phonebook.json";

    let btnLoad = document.getElementById('btnLoad');
    let btnCreate = document.getElementById('btnCreate');
    let ul = document.getElementById('phonebook');
    btnLoad.addEventListener("click", function () {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                Object.keys(data).forEach(key => {
                    let li = document.createElement('li');
                    li.innerText = `${data[key].person}: ${data[key].phone}`;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.innerText = "Delete";
                    let deleteURL = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
                    deleteBtn.addEventListener("click", function () {
                        fetch(deleteURL, {method: 'DELETE'});
                    });

                    li.appendChild(deleteBtn);
                    ul.appendChild(li);
                });
            });
    });

    btnCreate.addEventListener("click", function () {
        let person = document.getElementById('person');
        let phone = document.getElementById('phone');

        fetch(url, {method: 'POST', body: JSON.stringify({person: person.value, phone: phone.value})});
    });
}


attachEvents();
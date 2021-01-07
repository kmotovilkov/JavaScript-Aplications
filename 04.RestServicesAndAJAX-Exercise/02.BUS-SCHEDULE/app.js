function solve() {
    const baseURL = 'https://judgetests.firebaseio.com/schedule/';
    const info = document.getElementById('info');
    let stopName;
    let stopID = 'depot';

    function changeBtn() {
        let departBtn = document.getElementById('depart');
        let arivetBtn = document.getElementById('arrive');
        if (departBtn.disabled) {
            departBtn.disabled = false;
            arivetBtn.disabled = true;
        } else {
            departBtn.disabled = true;
            arivetBtn.disabled = false;
        }
    }

    function depart() {
        const url = baseURL + stopID + '.json';
        fetch(url)
            .then(function (response) {
                response.json()
                    .then(function (data) {
                        info.innerText = `Next stop ${data.name}`;
                        stopID = data.next;
                        stopName = data.name;
                        info.style.fontSize = '1.2em';
                    });
            });
        changeBtn();
    }

    function arrive() {
        info.innerText = `Arriving ${stopName}`;
        changeBtn();
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
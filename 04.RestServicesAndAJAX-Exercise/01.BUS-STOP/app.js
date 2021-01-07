function getInfo() {
    let validBusesID = ['1287', '1308', '1327', '2334'];
    let stopID = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    if (!validBusesID.includes((stopID.value))) {
        stopName.innerHTML = "Error!";
        return;
    }
    const url = `https://judgetests.firebaseio.com/businfo/${stopID.value}.json`;
    fetch(url)
        .then(function (response) {
            response.json()
                .then(function (data) {

                    stopName.innerHTML = data.name;

                    Object.keys(data.buses).forEach(function (key) {
                        let li = document.createElement('li');
                        li.innerHTML = `Bus ${key} arrives in ${data.buses[key]} minutes`
                        buses.appendChild(li);
                    });

                    stopID.innerHTML = "";
                });
        });
    stopID.value = "";
}

function attachEvents() {
    const addBtn = document.querySelector("button.add");
    const loadBtn = document.querySelector("button.load");
    // const updateBtn = document.querySelector("button.update");
    // const deleteBtn = document.querySelector("button.delete");
    const catchesDiv = document.getElementById("catches");

    const baseUrl = "https://fisher-game.firebaseio.com/catches.json";

    addBtn.addEventListener("click", () => {

        let angler = document.querySelector("fieldset > input.angler");
        let weight = document.querySelector("fieldset > input.weight");
        let species = document.querySelector("fieldset > input.species");
        let location = document.querySelector("fieldset > input.location");
        let bait = document.querySelector("fieldset > input.bait");
        let captureTime = document.querySelector("fieldset > input.captureTime");

        let obj = JSON.stringify({
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value
        });

        fetch(baseUrl, {method: "POST", body: obj})
            // .then(res => res.json())
            // .then(data => console.log(data));
    });

    loadBtn.addEventListener("click", () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.keys(data).forEach(key => {
                    appendCatch(key, data);
                });
            });
    });

    function appendCatch(key, data) {
        let {angler, weight, species, location, bait, captureTime} = data[key];
        let catchDiv = createElement("div", "catch", "");

        let anglerLabel = createElement("label", "", "Angler");
        let anglerInput = createElement("input", "angler", angler, "text");

        let weightLabel = createElement("label", "", "Weight");
        let weightInput = createElement("input", "wight", weight, "number");

        let speciesLabel = createElement("label", "", "Secies");
        let speciesInput = createElement("input", "species", species, "text");

        let locationLabel = createElement("label", "", "Location");
        let locationInput = createElement("input", "location", location, "text");

        let baitLabel = createElement("label", "", "Bait");
        let baitInput = createElement("input", "bait", bait, "text");

        let captureTimeLabel = createElement("label", "", "Capture Time");
        let captureTimeInput = createElement("input", "captureTime", captureTime, "number");

        let updateBtn = createElement("button", "update", "Update");
        let deleteBtn = createElement("button", "delete", "Delete");


        catchDiv.appendChild(anglerLabel);
        catchDiv.appendChild(anglerInput);
        catchDiv.appendChild(document.createElement("hr"));
        catchDiv.appendChild(weightLabel);
        catchDiv.appendChild(weightInput);
        catchDiv.appendChild(document.createElement("hr"));
        catchDiv.appendChild(speciesLabel);
        catchDiv.appendChild(speciesInput);
        catchDiv.appendChild(document.createElement("hr"));
        catchDiv.appendChild(locationLabel);
        catchDiv.appendChild(locationInput);
        catchDiv.appendChild(document.createElement("hr"));
        catchDiv.appendChild(baitLabel);
        catchDiv.appendChild(baitInput);
        catchDiv.appendChild(document.createElement("hr"));
        catchDiv.appendChild(captureTimeLabel);
        catchDiv.appendChild(captureTimeInput);
        catchDiv.appendChild(document.createElement("hr"));
        catchDiv.appendChild(updateBtn);
        catchDiv.appendChild(deleteBtn);


        catchesDiv.appendChild(catchDiv);

    }

    function createElement(el, classes, content, type) {
        let element = document.createElement(el);
        if (el === "input") {
            element.type = type;
            element.value = content;
        } else {
            element.innerHTML = content;
        }
        element.className = classes;

        return element;
    }
}

attachEvents();


function attachEvents() {
    const addBtn = document.querySelector("button.add");
    const loadBtn = document.querySelector("button.load");
    const updateBtn = document.querySelector("button.update");
    const dleteBtn = document.querySelector("button.delete");

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
            .then(res => res.json())
            .then(data => console.log(data));

    });
}

attachEvents();


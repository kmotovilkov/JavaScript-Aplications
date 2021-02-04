const input = document.getElementById("towns");
const loadBtn = document.getElementById("btnLoadTowns");
const rootEl = document.getElementById("root");
const getTemplate = fetch("./template.hbs").then((res => res.text()));

loadBtn.addEventListener("click", getInput);

function getInput(e) {
    e.preventDefault();
    const {value} = input;
    const towns = value.split(", ").map((t) => {
        return {name: t}
    });
    appendTowns(towns);
}

function appendTowns(towns) {
    getTemplate.then((temp) => {
        const template = Handlebars.compile(temp);
        rootEl.innerHTML = template({towns});
    }).catch((e) => console.error(e));
}




const allcats = document.getElementById("allCats");

Promise.all([
    getTemplate("./template.hbs"),
    getTemplate("./cats.hbs")

]).then(([templateSrc, catSrc]) => {
    Handlebars.registerPartial("cat", catSrc);
    let template = Handlebars.compile(templateSrc);
    let resultHtml = template({cats});
    allcats.innerHTML = resultHtml;
    attachEvent();

}).catch(e => console.error(e));


function getTemplate(templateLocation) {
    return fetch(templateLocation).then(res => res.text());
}

function attachEvent() {
    allcats.addEventListener("click", (e) => {
        const {target} = e;

        if (target.nodeName === "BUTTON" && target.className === "showBtn") {
            let divStatus = target.parentNode.querySelector("div.status");

            if (divStatus.style.display === "none" || divStatus.style.display === "") {
                divStatus.style.display = "block";
                e.target.textContent = "Hide status code"
            } else {
                divStatus.style.display = "none";
                e.target.textContent = "Show status code";
            }
        }
    });
}
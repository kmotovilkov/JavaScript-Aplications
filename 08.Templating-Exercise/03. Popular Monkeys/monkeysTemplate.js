import monkeys from "./monkeys.js";


const allMonkeys = document.querySelector("div.monkeys");

fetch("./monkeys.hbs")
    .then(res => res.text())
    .then(monkeyTempSrc => {
        const monkeysTemp = Handlebars.compile(monkeyTempSrc);
        const resultHtml = monkeysTemp({monkeys});
        allMonkeys.innerHTML = resultHtml;

        attachEvent();
    }).catch(e => console.error(e));

function attachEvent() {
    allMonkeys.addEventListener("click", (e) => {
        const {target} = e;
        if (target.nodeName !== "BUTTON" || target.textContent !== "Info") {
            return;
        }
        const p = target.parentNode.querySelector("p");

        if (p.style.display === "none" ) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
}
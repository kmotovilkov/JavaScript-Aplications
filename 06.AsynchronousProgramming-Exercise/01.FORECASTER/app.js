function attachEvents() {
    let weatherBtn = document.getElementById("submit");
    const baseUrl = "https://judgetests.firebaseio.com";
    let inputLocation = document.getElementById("location");
    let currentDiv = document.getElementById("current");
    let forecastParentDiv = document.getElementById("forecast");

    const symbols =
        {
            Sunny: "&#x2600",// ☀
            "Partly sunny": "&#x26C5", // ⛅
            Overcast: "&#x2601", // ☁
            Rain: "&#x2614", // ☂
            Degrees: "&#176",  // °
        }

    weatherBtn.addEventListener("click", () => {
        fetch(baseUrl + "/locations.json").then(res => res.json())
            .then(data => {
                let {name, code} = data.find(location => location.name === inputLocation.value);

                let currentWether = fetch(baseUrl + `/forecast/today/${code}.json `)
                    .then(rec => rec.json());

                let upcomingWether = fetch(baseUrl + `/forecast/upcoming/${code}.json`)
                    .then(rec => rec.json());

                Promise.all([currentWether, upcomingWether])
                    .then(([currentData, upcomingData]) => {
                        let forecastDiv = createElement("div", "forecasts", "");

                        let currentSymbol = symbols[currentData.forecast.condition];

                        console.log(currentSymbol);
                        let conditionSymbolSpan = createElement("span", "condition symbol", currentSymbol);
                        let conditionInfoSpan = createElement("span", "condition", "");

                        let forecastCitySpan = createElement("span", "forecast-data", currentData.name);

                        let highLow = `${currentData.forecast.low}${symbols.Degrees}/${currentData.forecast.high}${symbols.Degrees}`;
                        let forecastInfoSpan = createElement("span", "forecast-data", highLow);

                        let forecastCounditionSpan = createElement("span", "forecast-data", currentData.forecast.condition)

                        forecastDiv.appendChild(conditionSymbolSpan);
                        currentDiv.appendChild(forecastDiv);
                        conditionInfoSpan.appendChild(forecastCitySpan);
                        conditionInfoSpan.appendChild(forecastInfoSpan);
                        conditionInfoSpan.appendChild(forecastCounditionSpan);
                        forecastDiv.appendChild(conditionInfoSpan);

                        forecastParentDiv.style.display = "block";


                    }).catch(error => console.log(error));
            });

    });

    function createElement(el, classes, content) {
        let element = document.createElement(el);
        element.className = classes;
        element.innerHTML = content;

        return element;
    }
}

attachEvents();
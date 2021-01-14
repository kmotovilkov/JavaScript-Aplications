function attachEvents() {
    let weatherBtn = document.getElementById("submit");
    const baseUrl = "https://judgetests.firebaseio.com";
    let inputLocation = document.getElementById("location");
    let currentDiv = document.getElementById("current");
    let forecastParentDiv = document.getElementById("forecast");
    let upcomingDiv = document.getElementById("upcoming");

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
                    .then(showForecast)
                    .catch((error) => {
                        forecastParentDiv.textContent = "ERROR!";
                    });
            });
    });

    function createElement(el, classes, content) {
        let element = document.createElement(el);
        element.className = classes;
        element.innerHTML = content;

        return element;
    }

    function showForecast([currentData, upcomingData]) {
        forecastParentDiv.style.display = "block";
        showCurrent(currentData);
        showUpcoming(upcomingData);
    }

    function showCurrent(currentData) {
        let forecastDiv = createElement("div", "forecasts", "");

        let currentSymbol = symbols[currentData.forecast.condition];


        let conditionSymbolSpan = createElement("span", "condition symbol", currentSymbol);
        let conditionInfoSpan = createElement("span", "condition", "");

        let forecastCitySpan = createElement("span", "forecast-data", currentData.name);

        let highLow =
            `${currentData.forecast.low}${symbols.Degrees}/${currentData.forecast.high}${symbols.Degrees}`;
        let forecastInfoSpan = createElement("span", "forecast-data", highLow);

        let forecastCounditionSpan =
            createElement("span", "forecast-data", currentData.forecast.condition);

        forecastDiv.appendChild(conditionSymbolSpan);
        currentDiv.appendChild(forecastDiv);
        conditionInfoSpan.appendChild(forecastCitySpan);
        conditionInfoSpan.appendChild(forecastInfoSpan);
        conditionInfoSpan.appendChild(forecastCounditionSpan);
        forecastDiv.appendChild(conditionInfoSpan);

        forecastParentDiv.style.display = "block";
    }

    function showUpcoming(upcomingData) {
        let forecastInfoDiv = createElement("div", "forecast-info", "");

        upcomingData.forecast.forEach(obj => {
            let upcomingSpan = createElement("span", "upcoming", "");
            let conditionSymbolSpan = createElement("span", "symbol", symbols[obj.condition]);

            let highLow =
                `${obj.low}${symbols.Degrees}/${obj.high}${symbols.Degrees}`;
            let forecastInfoSpan = createElement("span", "forecast-data", highLow);

            let forecastCounditionSpan =
                createElement("span", "forecast-data", obj.condition);

            upcomingSpan.appendChild(conditionSymbolSpan);
            upcomingSpan.appendChild(forecastInfoSpan);
            upcomingSpan.appendChild(forecastCounditionSpan);
            forecastInfoDiv.appendChild(upcomingSpan);
        });

        upcomingDiv.appendChild(forecastInfoDiv);
    }
}

attachEvents();
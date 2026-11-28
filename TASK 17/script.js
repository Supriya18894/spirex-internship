const date = document.getElementById("date");
date.textContent = new Date().toDateString();

const input = document.getElementById("city-input");
const city = document.getElementById("city");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    if (input.value === "") {
        alert("Kindly enter a city name to proceed with");
    }
    else {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${input.value}&count=1`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const location = data.results[0];
                city.textContent = location.name;
                const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
                fetch(weatherUrl)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (weatherData) {
                        const current = weatherData.current;

                        const temp = document.getElementById("temperature");

                        temp.textContent = current.temperature_2m + "°C";
                        document.getElementById("humidity").textContent = current.relative_humidity_2m + "%";
                        document.getElementById("wind").textContent = current.wind_speed_10m + " km/h";
                        const code = current.weather_code;
                        const condition = document.getElementById("condition");

                        if (code === 0) {
                            condition.textContent = "Clear Sky";
                            document.body.style.backgroundImage = "url('images/sunny.jpg')";
                        }
                        else if (code === 1 || code === 2 || code === 3) {
                            condition.textContent = "Cloudy";
                            document.body.style.backgroundImage = "url('images/cloudy.jpeg')";
                        }
                        else if (code === 45 || code === 48) {
                            condition.textContent = "Foggy";
                            document.body.style.backgroundImage = "url('images/foggy.jpg')";
                        }
                        else if (code >= 51 && code <= 67) {
                            condition.textContent = "Rainy";
                            document.body.style.backgroundImage = "url('images/rainy.jpeg')";
                        }
                        else if (code >= 71 && code <= 77) {
                            condition.textContent = "Snowy";
                            document.body.style.backgroundImage = "url('images/snowy.jpeg')";
                        }
                        else if (code >= 80 && code <= 82) {
                            condition.textContent = "Rain Showers";
                            document.body.style.backgroundImage = "url('images/rainy.jpeg')";
                        }
                        else if (code >= 95 && code <= 99) {
                            condition.textContent = "Thunderstorm";
                            document.body.style.backgroundImage = "url('images/stormy.jpeg')";
                        }
                        else {
                            condition.textContent = "Unknown";
                        }
                    });
            });
    }

});
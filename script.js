let apikey = `5cf5e902ff00a68c39e1d0fc56c7315f`;
let searchBtn = document.querySelector("#search-btn");
let resultBox = document.querySelector("#result");

const weatherData = async () => {
    let cityName = document.querySelector("#city-name").value.trim();
    // console.log(cityName);

    if (cityName === "") {
        resultBox.innerHTML = `<p>Please enter a city name</p>`;
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`
        );
        console.log(response);

        if (!response.ok) {
            resultBox.innerHTML = `<p>City not found</p>`;
            return;
        }

        const data = await response.json();
        console.log(data);

        resultBox.innerHTML = `
            <h3>Country: ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.log(error, "Something went wrong")
        resultBox.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
};

searchBtn.addEventListener("click", weatherData);
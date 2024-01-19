
src="https://kit.fontawesome.com/8516ac1502.js"; crossorigin="anonymous">




// Smooth scroll script
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'bc2105019a84c3d8b746d29a95c122da';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    function getWeather() {
        const city = 'Nairobi'; // Replace with the actual city name
        const weatherResultElement = document.getElementById('weatherResult');

        fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function displayWeather(data) {
        const weatherResultElement = document.getElementById('weatherResult');
        weatherResultElement.innerHTML = '';

        // Extract and display the 5-day forecast data horizontally
        for (let i = 0; i < data.list.length; i += 8) {
            const forecastItem = data.list[i];
            const date = new Date(forecastItem.dt * 1000);

            const forecastHTML = `
                <div class="forecast-item">
                    <p><strong>Date:</strong> ${date.toDateString()}</p>
                    <p><strong>Temperature:</strong> ${forecastItem.main.temp}°C</p>
                    <p><strong>Weather:</strong> ${forecastItem.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${forecastItem.main.humidity}%</p>
                </div>
            `;

            weatherResultElement.innerHTML += forecastHTML;
        }
    }

    const getWeatherBtn = document.getElementById('getWeatherBtn');
    getWeatherBtn.addEventListener('click', getWeather);
});


//agro api script


document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'bc2105019a84c3d8b746d29a95c122da';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/agro/forecast';

    function getAgroWeather() {
        const lat = '51.507351'; // Replace with the actual latitude of your location
        const lon = '-0.127758'; // Replace with the actual longitude of your location
        const agroWeatherResultElement = document.getElementById('agroWeatherResult');

        fetch(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                displayAgroWeather(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function displayAgroWeather(data) {
        const agroWeatherResultElement = document.getElementById('agroWeatherResult');
        agroWeatherResultElement.innerHTML = '';

        // Display agriculture weather information
        const agroHTML = `
            <p><strong>Soil Temperature:</strong> ${data.soil_temperature}°C</p>
            <p><strong>Soil Moisture:</strong> ${data.soil_moisture}%</p>
            <p><strong>Precipitation Forecast:</strong> ${data.precipitation} mm</p>
            <!-- Add more fields based on available data in the API response -->
        `;

        agroWeatherResultElement.innerHTML = agroHTML;
    }

    const getAgroWeatherBtn = document.getElementById('getAgroWeatherBtn');
    getAgroWeatherBtn.addEventListener('click', getAgroWeather);
});

document.addEventListener('DOMContentLoaded', function () {
    const exploreMoreBtn = document.getElementById('exploreMoreBtn');

    exploreMoreBtn.addEventListener('click', function () {
        // Navigate to the forum.html page
        window.location.href = 'forum.html';
    });

    // Other existing JavaScript code...
});
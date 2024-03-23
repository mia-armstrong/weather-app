function showWeather(response) {
    //let cityName = document.querySelector("#cityName");
    //cityName.innerHTML = response.data.name;
    let humidity = document.querySelector('#humidity');
    humidity.innerHTML = `${response.data.main.humidity}%`;
    let windSpeed = document.querySelector("#windSpeed");
    windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
    let temp = document.querySelector("#temp");
    temp.innerHTML = `${Math.round(response.data.main.temp)}°C`;

    let weatherIcon = document.querySelector('#weatherIcon');
    let openWeatherIcon = response.data.weather[0].icon;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${openWeatherIcon}@2x.png`);


    console.log(response.data);

}

function search(event) {
    event.preventDefault();
    cityName = document.querySelector('#searchInput').value;
    geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
    axios.get(geoUrl).then(getCoordinates);
}

function getCoordinates(response) {
    document.querySelector("#cityName").innerHTML = response.data[0].name;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
}

let citySearch = document.querySelector('#searchCity');
citySearch.addEventListener('click', search);

const apiKey = "451b9a9a0354f7c7ab80d37db307b09e";
let cityName = "London";
let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

axios.get(geoUrl).then(getCoordinates);



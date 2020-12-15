function formatDate(timestamp){
let date= new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
  }
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
let day = days[date.getDay()];
return`${day} ${hours}:${minutes} `;
}

function showTemperature(response){
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let description = document.querySelector("#description");
let windElement = document.querySelector("#wind");
let visibilityElement = document.querySelector("#visibility");
let humidityElement = document.querySelector("#humidity");
let feelsElement = document.querySelector("#feelsLike");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celsiusTemperature = response.data.main.temp;

temperatureElement.innerHTML = Math.round(celsiusTemperature);
cityElement.innerHTML = response.data.name;
description.innerHTML = response.data.weather[0].description;
windElement.innerHTML = Math.round(response.data.wind.speed);
visibilityElement.innerHTML = response.data.wind.speed;
humidityElement.innerHTML = response.data.main.humidity;
feelsElement.innerHTML = Math.round(response.data.main.feels_like);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute ("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}


function search(city){
let apiKey = "63c0356d5ea58f413b8af4b34fb11290";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);

apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);

}

function handleSubmit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
}

function displayFahrenheitTemperature(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
let celsiusTemperature = null;


let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let fahrenheitLink = document.querySelector("#farenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);


search("Poprad");
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


temperatureElement.innerHTML = Math.round(response.data.main.temp);
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

}


function handleSubmit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);
function showTemperature(response){
console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let description = document.querySelector("#description");
let windElement = document.querySelector("#wind");
let visibilityElement = document.querySelector("#visibility");
let humidityElement = document.querySelector("#humidity");
let feelsElement = document.querySelector("#feelsLike");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
description.innerHTML = response.data.weather[0].description;
windElement.innerHTML = Math.round(response.data.wind.speed);
visibilityElement.innerHTML = response.data.wind.speed;
humidityElement.innerHTML = response.data.main.humidity;
feelsElement.innerHTML = Math.round(response.data.main.feels_like);
}

let apiKey = "63c0356d5ea58f413b8af4b34fb11290";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
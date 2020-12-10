function showTemperature(response){
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    let message = `It is ${temperature} degrees in ${city}`;
    h1.innerHTML = message;
}


let apiKey = "63c0356d5ea58f413b8af4b34fb11290";
let city = "Tallinn";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  let h1=document.querySelector("h1");
  h1.innerHTML= `${day} ${hours}:${minutes}`;

}



function showPosition(position){
    let apiKey = "63c0356d5ea58f413b8af4b34fb11290";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "#current-city"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    let city = response.data.name;
    axios.get(apiUrl).then(showTemperature);
}


function showTemperature(response){
    let temperature = Math.round(response.data.main.temp);
}

navigator.geolocation.getCurrentPosition(showPosition);
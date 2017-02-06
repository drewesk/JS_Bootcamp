"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  // console.log(searchCity.value);
  loadingText.style.display = 'block';
  weatherBox.style.display = 'none';
  var cityName = searchCity.value;
  if (cityName.trim().length == 0) {
    return alert('Please enter a City Name');
  }
  var http = new XMLHttpRequest();
  var apiKey = 'deb89b492de78d8be04a9d5ca37d7c16';
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(cityName, data.weather[0].description);
      weatherData.humid = data.main.humidity + "%";
      weatherData.temperature = data.main.temp;
      console.log(weatherData);
      updateWeather(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert('Script Error');
    }
  };
  http.send();
}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = 'Desc: ' + weatherData.description;
  weatherHumidity.textContent = 'Humid: ' + weatherData.humid;
  weatherTemperature.textContent = 'Temp: ' + weatherData.temperature;

  loadingText.style.display = 'none';
  weatherBox.style.display = 'block';
}

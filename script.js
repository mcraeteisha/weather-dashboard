var citySearchEl = document.querySelector('#city-search');
var searchBtn = document.querySelector('#search-btn');
var cityName = document.getElementById('weather-search-term');

//Current weather elements to display to page
var weatherIconEl = document.getElementById('icon-placeholder')
var weatherInfoEl = document.querySelector('#weather-info');
var temperatureInfoEl = document.querySelector('#temperature-info');
var humidityInfoEl = document.querySelector('#humidity-info');
var windSpeedInfoEl = document.querySelector('#wind-speed-info');
var uvIndexInfoEl = document.querySelector('#uv-index-info');
var weatherIcon;

//5-Day forecast elements to display to page
var forecastTitleEl = document.getElementById('forecast-title-placeholder');
var forecastDateEl = document.getElementById('date-placeholder');
var forecastTempEl = document.getElementById('forecast-temp-placeholder');
var forecastIconEl = document.getElementById('forecast-icon-placeholder');
var forecastHumidityEl = document.getElementById('forecast-humidity-placeholder');


//Handle Search gets current weather for searched city
function handleSearch() {
  getCurrentWeather(cityName);
  getForecastWeather(cityName);
}

//Get current weather for the searched city via the API, render weather data to the page
function getCurrentWeather(cityName) {
  console.log(cityName.value);
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=90c196e218aeae618fd443494f7e9524";
  fetch(apiUrl)
    .then(function(response) {
        return response.json();
      })
        .then(function(data) {
          console.log(data);
          renderWeather(data);
          // // renderForecast(data);
          // createWeatherIcon(data);
        })
};

function getForecastWeather(cityName) {
  console.log(cityName.value);
  var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName.value + "&appid=90c196e218aeae618fd443494f7e9524";
  fetch(apiUrl)
    .then(function(response) {
        return response.json();
      })
        .then(function(data) {
          console.log(data);
          renderForecast(data);
        })
};

// function createWeatherIcon(data) {
//   var weatherIcon = data.weather[0].icon;
//   var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
//   // var img = document.createElement('img');
//   // // img.src = iconURL;
//   // console.log(img.src)
//   console.log(weatherIcon);
//   console.log(iconURL);
//   weatherIconEl.innerHTML = '<img src='+iconURL+'>';
// }

//Function to render 5-day forecast to the page
function renderForecast(data) {
  forecastTitleEl.textContent = '5-Day Forecast:';
  var forecastDate = moment();
  var forecast = data.list;
  for(var i=0; i < 5; i++) {
    console.log(forecast[i]);
    forecastDateEl.textContent = forecastDate.add(1, "days").format("MMM Do, YYYY");
    forecastTempEl.textContent = 'Temperature: ' + Math.round(((data.list[i].main.temp-273.15)*1.8)+32) + '\u00B0' + 'F';
    forecastHumidityEl.textContent = 'Humidity: ' + data.list[i].main.humidity + '%';
}
}

//Function to render weather data to the page
function renderWeather(data) {
  var weatherIcon = data.weather[0].icon;
  var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
  var img = document.createElement('img');
  img.src = iconURL;
  console.log(img.src)
  console.log(weatherIcon);
  console.log(img);
  // weatherIconEl.append(img);
  removeWeatherIcon();
  weatherIconEl.append(img);

  var today = moment();
  weatherInfoEl.textContent = cityName.value + ' | ' + today.format("MMM Do, YYYY");
  temperatureInfoEl.textContent = 'Temperature: ' + Math.round(((data.main.temp-273.15)*1.8)+32) + '\u00B0' + 'F';
  humidityInfoEl.textContent = 'Humidity: ' + data.main.humidity + '%';
  windSpeedInfoEl.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH';
}


function removeWeatherIcon() {
  $('#icon-placeholder').empty();
}




searchBtn.addEventListener('click', handleSearch);




/*var displayCurrentWeather = function (weatherData, searchTerm) {
  if (weatherData.length === 0) {
    weatherInfoEl.textContent = 'Weather unavailable for selected city.';
    return;
  }

  weatherSearchTerm.textContent = searchTerm;

    var repoName = repos[i].owner.login + '/' + repos[i].name;

    var repoEl = document.createElement('a');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';
    repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);

    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
};*/
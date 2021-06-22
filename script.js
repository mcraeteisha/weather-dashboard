var citySearchEl = document.querySelector('#city-search');
var searchBtn = document.querySelector('#search-btn');
var cityName = document.getElementById('weather-search-term');

//Weather elements to display to page
var weatherIconEl = document.getElementById('icon-placeholder')
var weatherInfoEl = document.querySelector('#weather-info');
var temperatureInfoEl = document.querySelector('#temperature-info');
var humidityInfoEl = document.querySelector('#humidity-info');
var windSpeedInfoEl = document.querySelector('#wind-speed-info');
var uvIndexInfoEl = document.querySelector('#uv-index-info');
var weatherIcon;


//Handle Search gets current weather for searched city
function handleSearch() {
  getCurrentWeather(cityName)
}

//Get current weather for the searched city via the API, render weather data to the page
function getCurrentWeather(cityName) {
  console.log(cityName.value);
  var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName.value + "&appid=90c196e218aeae618fd443494f7e9524";
  fetch(apiUrl)
    .then(function(response) {
        return response.json();
      })
        .then(function(data) {
          console.log(data);
          renderWeather(data);
          createWeatherIcon(data);
        })
};


function createWeatherIcon(data) {
  var weatherIcon = data.list[0].weather[0].icon;
  var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
  // var img = document.createElement('img');
  // // img.src = iconURL;
  // console.log(img.src)
  console.log(weatherIcon);
  console.log(iconURL);
  weatherIconEl.innerHTML = '<img src='+iconURL+'>';
}

//Function to render weather data to the page
function renderWeather(data) {
  var today = moment();
  weatherInfoEl.textContent = cityName.value + ' | ' + today.format("MMM Do, YYYY");
  temperatureInfoEl.textContent = 'Temperature: ' + Math.round(((data.list[0].main.temp-273.15)*1.8)+32) + '\u00B0' + 'F';
  humidityInfoEl.textContent = 'Humidity: ' + data.list[0].main.humidity + '%';
  windSpeedInfoEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' MPH';
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
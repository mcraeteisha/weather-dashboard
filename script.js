var citySearchEl = document.querySelector('#city-search');
var searchBtn = document.querySelector('#search-btn');
var cityName = document.getElementById('weather-search-term');
var weatherIconEl = document.getElementById('icon-placeholder')
var weatherInfoEl = document.querySelector('#weather-info');

function handleSearch() {
  getCurrentWeather(cityName)
}


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
        })
};


function renderWeather(data) {
  var today = moment();
  weatherInfoEl.textContent = cityName.value + ' | ' + today.format("MMM Do, YYYY");
  weatherIconEl = createWeatherIcon();
}

function createWeatherIcon(data) {
  var weatherIcon = data.list[0].weather[0].icon;
  var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
  var img = document.createElement('img');
  img.src = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
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
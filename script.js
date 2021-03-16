var citySearchEl = document.querySelector('#city-search');
var weatherInfoEl = document.querySelector('#weather-info');
var cityName = document.getElementById('#weather-search-term').value;

var getCurrentWeather = function () {
  var apiUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=90c196e218aeae618fd443494f7e9524';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayCurrentWeather(data, user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};



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
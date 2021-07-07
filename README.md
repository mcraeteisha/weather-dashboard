# weather-dashboard
A weather dashboard that features dynamically updated HTML and CSS. Created using the OpenWeather API to retrieve weather data for cities. 

## Link to Deployed Application
[Weather Dashboard](https://mcraeteisha.github.io/weather-dashboard/)

## User Story
As a traveler:
* I want to see the weather outlook for multiple cities so that I can plan a trip accordingly

## Technologies Used
* HTML
* CSS / Materialize
* JavaScript
* Local Storage
* OpenWeather API
 
## Work Completed

Using VS Code, the [OpenWeather API](https://openweathermap.org/api), Materialize, and GitHub, I completed the following:

* Created a Weather Dashboard UI using HTML, CSS, and Materialize CSS.
* Fetched data from the OpenWeather API.
* Displayed data from the OpenWeather API to the page upon search.
* Used Local Storage to save previous search data.
 
## Learnings and Issues
Some of the learnings I'm taking away from this project are:
1. The biggest issue I had with this project was getting the weather icon image to display to the page. I was able to successfully pull the image from the API data and create an image URL for it (I logged the image URL to the console and was sent to the correct image upon clicking). Initially, I was attempting to add the image to the HTML page as innerHTML content. I was also using a span tag, which I changed to a p tag. Once I appended the image to the p tag element, I was able to get it to successfully append to the page.
2. Unfortunately, the UV Index API had been deprecated when I completed this project, so I was not able to add that feature to my weather information. 

## Future Application Updates
* Fix 5-Day Forecast Display (currently displays one day of the week)
* Fix function for viewing Current Temps and Forecast for previously searched cities. Currently, clicking on the buttons in the Search History does nothing.
 
## Contributors
Teisha McRae

![Website Screenshot](https://user-images.githubusercontent.com/73713665/124681965-b69b6f80-de97-11eb-8614-4592e136da8f.png)



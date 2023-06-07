// Getting the required HTML elements
var cityName = document.querySelector(".searchInput");
var searchButton = document.querySelector("#search-btn");

// Adding the event listener
searchButton.addEventListener("click", function() {
    var cityName = cityInput.value;
    getWeather(cityName);
  });

function getWeather (cityName) {
var requestApi = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid=944e60e41c0c992134e31794af4ab0aa"

fetch(requestApi)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log (data)
})
.catch(function(error) {
    console.log("Error:", error);
  });
}

getWeather();


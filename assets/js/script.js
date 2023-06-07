// Getting the required HTML elements
var cityName = document.querySelector(".searchInput").value;
var searchButton = document.querySelector("#search-btn");
var cityList = document.querySelector("#city-list");

// Adding the event listener and local storage
searchButton.addEventListener("click", function() {
    var cityName = document.querySelector(".searchInput").value;
    // setting the cities to local storage
    localStorage.setItem("City", cityName);
    getWeather(cityName);
  });

// Getting the Cities from local storage and adding to list
  var getCities = JSON.parse(window.localStorage.getItem('savedCities'));
  getCities.cityList.append('<li>' + item + '</li>');


//   Getting the weather from the API
function getWeather (cityName) {
var requestApi = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid=944e60e41c0c992134e31794af4ab0aa"

fetch(requestApi)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log (data);
    displayWeather(data);
})
.catch(function(error) {
    console.log("Error:", error);
  });
}

getWeather();

// Function to display the information from the API
function displayWeather(data){
var currentCity = document.getElementById("current-city");
currentCity.textContent = "City:" + data.name;
}

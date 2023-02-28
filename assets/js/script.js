var cityName = document.querySelector(".searchInput");
cityName.textContent;

function getWeather () {
var requestApi = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid=944e60e41c0c992134e31794af4ab0aa"

fetch(requestApi)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log (data)
});
}

getWeather();


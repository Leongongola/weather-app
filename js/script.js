// document.getElementById("search-icon").addEventListener("click", function (){
//     weather.search();
    
//     })
    

let weather ={
    apiKey: "84ff045ff659866878158ecff63b7963",
    fetchWeather: function (city) {
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey)
     .then((response) => response.json())
     .then((data) => this.displayWeather(data)); 
    },
    
    displayWeather: function(data){
       const {name} = data;
       const {icon, description} = data.weather[0];
       const {temp, humidity} = data.main;
       const {speed} = data.wind;

       console.log(name, icon, temp, humidity, speed, description);

       document.getElementById("city-name").innerText = name;
       document.getElementById("weather-icon").src = "/weather icons/cloud/35.png";
       document.getElementById("type-of-weather").innerText = description;
       document.getElementById("wind").innerText = `${speed} km/h`;
       document.getElementById("temperature").innerText = `${Math.floor(temp)}°C`;
       document.getElementById("humidity").innerText = `${humidity}%`
    },
    search: function (){
        this.fetchWeather(document.getElementById("city-search").value);
    }
}


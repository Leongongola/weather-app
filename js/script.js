

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
       const {temp, humidity, temp_max, temp_min} = data.main;
       const {speed} = data.wind;
       const {visibility} = data;

       console.log(name, icon, temp, humidity, speed, description, visibility);

       document.getElementById("city-name").innerText = name;
       document.getElementById("type-of-weather").innerText = description;
       document.getElementById("wind").innerText = `${speed}km/h`;
       document.getElementById("temperature").innerText = `${Math.floor(temp)}`;
       document.getElementById("humidity").innerText = `${humidity}%`;
       document.getElementById("temp-high").innerText = `${Math.floor(temp_max)}`;
       document.getElementById("temp-low").innerText = `${Math.floor(temp_min)}`;
       document.getElementById("weather-icon").src = `/images/weather icons/${icon}`;
       document.getElementById("fog").innerText = `${visibility/1000}km`;
    },  
    
    search: function (){
        this.fetchWeather(document.getElementById("search-bar").value);
    } 
    
    
}


  
document.getElementById("search-button")
.addEventListener('click', function(){
weather.search();
})

document.getElementById("search-bar").addEventListener("keyup", function(event){
if (event.key == "Enter"){
    weather.search();
}
})


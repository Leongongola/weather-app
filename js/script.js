

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
       document.getElementById("weather-icon").src= icon;
       document.getElementById("fog").innerText = `${visibility/1000}km`;
       
      
    if ( icon === "01d"){
        "/images/weather icons/Sun 1.png";

    } else if (icon === "01n") {
        "/images/weather icons/Moon.png";

    } else if (icon === "02d") {
        "/images/weather icons/Sunny.png";

    } else if (icon === "02n") {
        "/images/weather icons/Dark Cloud.png";

    } else if (icon === "03d") {
        "/images/weather icons/Cloud 6.png";

    } else if (icon === "03n") {
        "/images/weather icons/Dark Cloud.png";
    }

    else if (icon === "04d") {
        "/images/weather icons/Cloud 6.png";
    }

    else if (icon === "04n") {
        "/images/weather icons/Dark Cloud.png";
    }

    else if (icon === "09d") {
        "/images/weather icons/Cloudy + Rainy.png";
    }

    else if (icon === "09n") {
        "/images/weather icons/Cloudy + Heavy Rain.png";
    }

    else if (icon === "10d") {
        "/images/weather icons/Sunny + Heavy Rain.png";
    }

    else if (icon === "10n") {
        "/images/weather icons/Dark Cloudy + Heavy Rain.png";
    }

    else if (icon === "11d") {
        "/images/weather icons/Cloudy + Rainy + Lightning.png";
    }

    else if (icon === "11n") {
        "/images/weather icons/Dark Cloudy + Rainy +Lightning.png";
    }

    else if (icon === "13d") {
        "/images/weather icons/Snowflake.png";
    }

    else if (icon === "13n") {
        "/images/weather icons/Snowflake.png";
    }

    else if (icon === "50d") {
        "/images/weather icons/Light Fog.png";
    }

    else if (icon === "50n") {
        "/images/weather icons/Light Fog.png";
    }else{
        "/images/weather icons/Sunny.png";
    }

   

       
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

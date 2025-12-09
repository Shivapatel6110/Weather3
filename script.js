const apiKey = "65017df61bd84487f6d0c8f115f76fdd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".img-weather");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherType = data.weather[0].main;  
    console.log("Weather main:", weatherType);

    const iconMap = {
        "Clouds": "clouds.png",
        "Clear": "clear.png",
        "Drizzle": "drizzle.png",
        "Rain": "rain.png",
        "Snow": "snow.png",
        "Mist": "mist.png"
    };

    const iconFile = iconMap[weatherType];

    if (iconFile) {
        weatherIcon.src = "./" + iconFile;   
        console.log("Using icon:", iconFile);
    } else {
        weatherIcon.src = "./clear.png";   
        console.log("Unknown weather type, using default icon");
    }
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});

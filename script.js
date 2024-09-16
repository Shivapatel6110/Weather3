const apiKey= "65017df61bd84487f6d0c8f115f76fdd";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".img-weather");

        async function checkweather(city) {
            const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data= await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
             
            if(data.weather[0].main =="Clouds") {
                weatherIcon.src = "clouds.png";
            }
            if(data.weather[0].main =="Clear") {
                weatherIcon.src = "clear.png";
            }
            if(data.weather[0].main =="Drizzle") {
                weatherIcon.src = "drizzle.png";
            }
            if(data.weather[0].main =="Rain") {
                weatherIcon.src = "rain.png";
            }
            if(data.weather[0].main =="Snow") {
                weatherIcon.src = "snow.png";
            }
            if(data.weather[0].main =="Mist") {
                weatherIcon.src = "mist.png";
            }

        }
        searchBtn.addEventListener("click", ()=>{
            checkweather(searchBox.value);
        })
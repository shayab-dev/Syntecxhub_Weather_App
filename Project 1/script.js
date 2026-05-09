const apiKey = '8bc18b8b4affe9f661740928ae9c1715';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value.trim());
});

async function checkWeather(city){
    const response = await fetch(apiUrl + encodeURIComponent(city) + `&appid=${apiKey}`);
    let data = await response.json();


    if (data.cod !== 200) {
        alert("City not found");
        return;
    }

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
      weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/1163/1163624.png';
    }

    else if(data.weather[0].main == 'Clear'){
      weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/6974/6974833.png';
    }

    else if(data.weather[0].main == 'Rain'){
      weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/10271/10271656.png';
    }

    else if(data.weather[0].main == 'Drizzle'){
      weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/7774/7774399.png';
    }

    else if(data.weather[0].main == 'Mist'){
      weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/7686/7686982.png';
    }

    document.querySelector('.weather').style.display = 'block';
}
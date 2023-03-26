// Api Key
const myKey = "6d70149880c118fd413d12aac089657e";
// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}

const box = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const image = document.querySelector(".weather-box img");
const temp = document.querySelector(".weather-box span");
const desc = document.querySelector(".weather-box p");
const humidity = document.querySelector(".humidity .text span");
const wind = document.querySelector(".wind-speed .text span");

search.addEventListener("click", () => {
  const APIKey = myKey;
  const city = document.querySelector(".input-control input").value;

  if (city === "") return;

  box.style.height = "450px";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.cod === "404") {
        image.src = "/images/404.png";
        humidity.innerHTML = 0;
        temp.innerHTML = 0;
        desc.innerHTML = "Error 404";
      }

      switch (res.weather[0].main) {
        case "Clouds":
          image.src = "./images/cloud.png";
          break;
        case "Clear":
          image.src = "./images/clear.png";
          break;
        case "Rain":
          image.src = "./images/rain.png";
          break;
        case "Snow":
          image.src = "./images/snow.png";
          break;
        case "Haze":
          image.src = "./images/mist.png";
          break;

        default:
          image.src = "";
          break;
      }
      temp.innerHTML = res.main.temp;
      desc.innerHTML = res.weather[0].description;
      wind.innerHTML = `${res.wind.speed}"Km/h"`;
      humidity.innerHTML = `${res.main.humidity}"%"`;
    });
});

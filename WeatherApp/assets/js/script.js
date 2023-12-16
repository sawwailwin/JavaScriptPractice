const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const API_KEY = "860be81e66c4a4522aa00102d2bf465f";

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  if (!cityName) return;

  const GEOCODING_API_URL =
    "http://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={API_KEY}";
  fetch(GEOCODING_API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      alert("An error occur while fetching the coordinates");
    });
};

searchButton.addEventListener("click", getCityCoordinates);

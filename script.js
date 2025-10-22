const apiKey = "YOUR_API_KEY"; // Get from openweathermap.org
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherDiv = document.getElementById('weather');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (!city) return;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        weatherDiv.innerHTML = `<p>City not found ❌</p>`;
      } else {
        weatherDiv.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <h1>${data.main.temp}°C</h1>
          <p>${data.weather[0].description}</p>
        `;
      }
    })
    .catch(() => {
      weatherDiv.innerHTML = `<p>Error fetching data ⚠️</p>`;
    });
});

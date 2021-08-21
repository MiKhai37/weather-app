import './style.css';
import displayUI from './modules/UI';

const API_KEY = '8c4e1429628ef567f3c7205d2a044eeb';
const city = 'Paris';



async function fetchNow(city, API_KEY) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
  const response = await fetch(url, {mode: 'cors'});
  const weatherData = await response.json();
  return weatherData;
}


function weatherLog(data) {
  const tempK = data.main.temp;
  const minTempK = data.main.temp_min;
  const maxTempK = data .main.temp_max;

  return {tempK, minTempK, maxTempK};
}


function convertKToC(tempK) {
  const tempC = tempK - 273.15;
  return tempC.toFixed(1);
}

function convertKtoF(tempK) {
  const tempF = (tempK - 273.15) * 9 / 5 + 32;
  return tempF.toFixed(1);
}

function displayTemp({tempK, minTempK, maxTempK}) {
  const tempDiv = document.getElementById('temp');
  const minTempDiv = document.getElementById('min-temp');
  const maxTempDiv = document.getElementById('max-temp');

  tempDiv.textContent = `${convertKToC(tempK)}°C`;
  minTempDiv.textContent = `${convertKToC(minTempK)}°C`;
  maxTempDiv.textContent = `${convertKToC(maxTempK)}°C`;
}

displayUI();

const convertBtn = document.getElementById('conv-btn')
convertBtn.addEventListener('click', () => {
  console.log('click');
});
fetchNow(city, API_KEY).then(weatherLog).then(displayTemp);

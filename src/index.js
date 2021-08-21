import './style.css';
import WeatherFetcher from './modules/WeatherFetcher';

const API_KEY = '8c4e1429628ef567f3c7205d2a044eeb';
const city = 'Paris';

const weatherFetcher = new WeatherFetcher();



function weatherLog(data) {
  const temp_k = data.main.temp;
  const min_temp_k = data.main.temp_min;
  const max_temp_k = data .main.temp_max;

  document.body.textContent = JSON.stringify({temp_k, min_temp_k, max_temp_k});

  return {temp, min_temp, max_temp}
}


weatherFetcher.fetchNow(city, API_KEY).then(weatherLog).then(console.log);


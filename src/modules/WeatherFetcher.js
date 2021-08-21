export default class WeatherFetcher {
  constructor() {

  }
  async fetchNow(city, API_KEY) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    const response = await fetch(url, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
  }
} 
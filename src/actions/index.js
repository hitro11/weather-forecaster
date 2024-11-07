import axios from 'axios';

const API_KEY = '1d2f6106ea3a874b04d19fc4077cecec';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(lat, lon) {

  //make the get request
  const URL = `${ROOT_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

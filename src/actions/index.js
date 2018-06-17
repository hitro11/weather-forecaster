import axios from 'axios';

const API_KEY = '355c934f86b4621e42bfdb4dcdb91769';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`;

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

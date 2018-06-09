import axios from 'axios';

const API_KEY = '355c934f86b4621e42bfdb4dcdb91769';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(searchTerm) {

  //make the get request
  const URL = `${ROOT_URL}?q=${searchTerm}&appid=${API_KEY}`;

  const weather = axios.get(URL)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: FETCH_WEATHER,
    payload: weather
  };
}

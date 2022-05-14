# Weather Forecaster
A web app built with React that allows you to view forecast data (temperature, humidity, and wind speed) of selected cities for the next 5 days.

## Details

#### Behavior

weather-forceaster uses the Google Maps API to suggest cities when searching in the textbox. When a city/location is selected, the coordinates (latitude and longitude) are sent to the OpenWeather API to fetch the weather data. This weather data is used to generate the forecast graphs for temperarure, humidity, and wind speed.

Multiple cities can be selected, and the weather data for all selected cities is displayed on the page.

#### Tools Used
weather-forecaster was built using React (with Redux), OpenWeather API, and Google Maps API.

---

## Install instructions

clone repo:
```
git clone https://github.com/hitro11/weather-forecaster.git
```

install node modules:
```
cd weather-forecaster
npm install
```

run app:
```
npm start
```

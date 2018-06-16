import React, { Component } from 'react';
import '../styles/app.css';
import SearchBar from '../containers/search_bar_container';
import WeatherList from '../containers/weather_list_container';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="search-bar">
          <SearchBar />        
        </div>

        <div className="weather-list">
          <WeatherList />
        </div>      
      </div>
    );
  }
}

export default App;

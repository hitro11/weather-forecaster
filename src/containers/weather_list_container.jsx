import React, {Component} from 'react';
import {connect} from 'react-redux';

import Graph from '../components/graph'


class WeatherList extends Component {

  constructor(props) {
     super(props);

     this.renderWeather.bind(this);
  }

  render() {
    return (
        <table className="table table-borderless table-hover ">
            <thead className="">
                <tr>
                    <th>Location</th>
                    <th>Temperature (&deg; C)</th>
                    <th>Humidity (%)</th>
                    <th>Wind Speed (km/h)</th>
                </tr>
            </thead>            
            <tbody>
               {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
    );
  }

  renderWeather(data) {
      let name = data.city.name;
      let tempList = data.list.map(weather => weather.main.temp);
      let humidityList = data.list.map(weather => weather.main.humidity);
      let windList = data.list.map(weather => weather.wind.speed);

      tempList = tempList.map(temp => Math.round(temp - 273.15)); //converts kelvin to celcius

      return (
          <tr key={name}>
              <td className="city-name">{name}</td>
              <td><Graph data={tempList} units="&deg; C" color="orange"/></td>
              <td><Graph data={humidityList} units="%" color="teal"/></td>
              <td><Graph data={windList} units="Km/h" color="purple"/> </td>
          </tr>
      );
    }
}

function mapStateToProps({weather}) {  //{weather} === state.weather
    return {weather}; //{weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
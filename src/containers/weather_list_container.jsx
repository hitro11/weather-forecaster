import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchWeather} from '../actions/index';

class WeatherList extends Component {

  constructor(props) {
     super(props);
     this.state = {term: ''};
  }

  render() {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            
            <tbody>

            </tbody>
        </table>
      
    );
  }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(WeatherList);
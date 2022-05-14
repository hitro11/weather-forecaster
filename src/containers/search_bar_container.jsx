/*global google*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
// import SearchBox from "react-google-maps/lib/components/places/SearchBox";

import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
     super(props);
     this.state = {term: '', searchBox: {}};

     this.onInputChange = this.onInputChange.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    var input = this.refs.input;
    var searchBox = new google.maps.places.SearchBox(input);    
    this.setState({searchBox: searchBox}); 

    // listener for when user selects a place.
    searchBox.addListener('places_changed', () => {
      console.log('place selected');
      let places = this.state.searchBox.getPlaces();
      let lat = places[0].geometry.location.lat();
      let lon = places[0].geometry.location.lng();
      this.props.fetchWeather(lat, lon);
    });
  }

  render() {   
    return (
      <div>
				<h2 className="title">5 Day Weather Forecaster</h2>
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input
							ref="input"
							id="pac-input"
							placeholder="Enter a city here to get its 5 day forecast" 
							className="form-control controls"
							value={this.state.term}
							onChange={this.onInputChange}
						/>        
					
						<span className="input-group-btn">
							<button type="submit" className="btn btn-secondary">Search</button>        
						</span>
		 			</form>
      </div>
    );
  }

  onInputChange(event) {
    this.setState( {term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    fetchWeather: fetchWeather
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
/*global google*/

import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  inputRef = createRef();
  searchBox = null;

  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    if (!window.google) {
      // Load the Google Maps script if it hasn't been loaded yet
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhENHckY3hVepmjyJdGR8NdZw7eLJ4_Bc&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => this.initializeSearchBox();
      document.head.appendChild(script);

    } else {
      this.initializeSearchBox();
    }
  }

  initializeSearchBox() {
    this.searchBox = new google.maps.places.SearchBox(this.inputRef.current);
    
    this.searchBoxListener = this.searchBox.addListener('places_changed', () => {
      let places = this.searchBox.getPlaces();
      if (places && places[0]) {
        let lat = places[0].geometry.location.lat();
        let lon = places[0].geometry.location.lng();
        this.props.fetchWeather(lat, lon);
      } else {
        console.error('No place selected');
      }
    });
  }

  componentWillUnmount() {
    if (this.searchBoxListener) {
      this.searchBoxListener.remove();
    }
  }

  render() {
    return (
      <div>
        <h2 className="title">5 Day Weather Forecaster</h2>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            ref={this.inputRef}
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
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeather
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

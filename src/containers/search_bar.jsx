import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
     super(props);
     this.state = {term: ''};

     this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter cities here to get their 5 day forecast" 
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}

        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>        
        </span>
      </form>
    );
  }

  onInputChange(event) {
    this.setState( {term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    //get weather!
  }
  
}
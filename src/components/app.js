import React, { Component } from 'react';
import './app.css';
import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="search-bar">
          <SearchBar />        
        </div>
      </div>
    );
  }
}

export default App;

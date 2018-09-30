import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchField from './SearchField';

import {robots} from './robots';
import CardArray from './CardArray';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      robots: robots,
      searchfields: ''
    }
  }

  onSearchChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchField searchChange={this.onSearchChange}/>
        <CardArray robots={this.state.robots} />
      </div>
    );
  }
}

export default App;

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
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchField searchChange={this.onSearchChange}/>
        <CardArray robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

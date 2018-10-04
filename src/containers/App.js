import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchField from '../components/SearchField';
import ErrorBoundry from '../components/ErrorBoundry';

import {robots} from '../robots';
import CardArray from '../components/CardArray';
import Scroll from '../components/Scroll';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? 
      <h1 className="tc">Loading...</h1> : 
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchField searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardArray robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;

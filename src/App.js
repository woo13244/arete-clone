import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home'
import Test from './Component/Carousel/Carousel';
import About from './Component/About/About'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/test" component={About}></Route>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;

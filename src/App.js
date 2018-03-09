import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Image, AboutHorse} from './MockContent';
import {ViewSwitcher} from './ViewSwitcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ViewSwitcher active={2}>
          <Image url="https://i.imgur.com/QlsmNE1.jpg"/>
          <AboutHorse/>
          <Image url="https://i.imgur.com/wYTCtRu.jpg"/>
          <Image url="https://i.imgur.com/Zu0bhYu.jpg"/>
        </ViewSwitcher>
      </div>
    );
  }
}

export default App;

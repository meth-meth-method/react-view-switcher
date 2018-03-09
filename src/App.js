import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Image, AboutHorse} from './MockContent';
import {ViewSwitcher} from './ViewSwitcher';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  skip(offset) {
    this.setState(prevState => {
      return {
        active: prevState.active + offset,
      };
    });
  }

  prev = () => {
    this.skip(-1);
  }

  next = () => {
    this.skip(1);
  }

  render() {
    const {active} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.prev}>Prev</button>
          {active}
          <button onClick={this.next}>Next</button>
        </header>
        <ViewSwitcher active={active}>
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

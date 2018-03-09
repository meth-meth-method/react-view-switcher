import React, { Component } from 'react';

import './ViewSwitcher.css';

export class ViewSwitcher extends Component {
  render() {
    return <div className="ViewSwitcher">
      {this.props.children.map((child, index) => {
        return <View key={index}>{child}</View>;
      }) }
    </div>;
  }
}

class View extends Component {
  render() {
    return <div className="ViewSwitcher-View">
      {this.props.children}
    </div>;
  }
}

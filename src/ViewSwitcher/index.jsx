import React, { Component } from 'react';

export class ViewSwitcher extends Component {
  render() {
    return <div className="ViewSwitcher">
      {this.props.children}
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

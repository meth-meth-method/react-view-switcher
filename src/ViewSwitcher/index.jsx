import React, { Component } from 'react';

export class ViewSwitcher extends Component {
  render() {
    return <div className="ViewSwitcher">
      {this.props.children}
    </div>;
  }
}

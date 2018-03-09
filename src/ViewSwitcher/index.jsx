import React, { Component } from 'react';

import './ViewSwitcher.css';

export class ViewSwitcher extends Component {
  render() {
    const {active} = this.props;

    return <div className="ViewSwitcher">
      {this.props.children.map((child, index) => {
        return <View key={index} offset={index - active}>{child}</View>;
      }) }
    </div>;
  }
}

class View extends Component {
  render() {
    const {offset} = this.props;

    const classes = [
      "ViewSwitcher-View",
    ];

    if (offset > 0) {
      classes.push("ahead");
    } else if (offset < 0) {
      classes.push("behind");
    } else {
      classes.push("current");
    }

    return <div className={classes.join(' ')}>
      {this.props.children}
    </div>;
  }
}

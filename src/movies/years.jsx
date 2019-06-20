import React, { Component } from 'react';

class Years extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'I want show the list of years in this place',
    };
  }

  render() {
    const { title } = this.state;

    return (<p>{title}</p>);
  }
}

export default Years;

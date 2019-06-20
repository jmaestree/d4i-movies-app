import React, { Component } from 'react';

class Genres extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Load genres here',
    };
  }

  render() {
    const { title } = this.state;

    return (<p>{title}</p>);
  }
}

export default Genres;

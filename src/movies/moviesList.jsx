import React, { Component } from 'react';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '¡I have to load all the movies list!',
    };
  }

  render() {
    const { title } = this.state;

    return (<p>{title}</p>);
  }
}

export default MoviesList;

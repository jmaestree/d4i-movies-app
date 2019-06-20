import React, { Component } from 'react';

import Years from './years';
import MoviesList from './moviesList';
import Genres from './genres';
import MovieDetail from './movieDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'D4i Movies app',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div className="container">
        <h1>{title}</h1>
        <div className="row">
          <div className="col-md-4">
            <Years />
          </div>
          <div className="col-md-4">
            <Genres />
          </div>
          <div className="col-md-4">
            <MoviesList />
          </div>
          <div className="col-md-6">
            <MovieDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import App from './movies/app';

require('../index.html');
require('./../style/styles.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

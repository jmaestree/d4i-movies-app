import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';

const store = createStore(
  reducers(),
  compose(applyMiddleware(thunk)),
);

export default store;

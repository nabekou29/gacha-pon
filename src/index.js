import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AllReducer from './reducers';
import App from './container/App/App';

const store = createStore(AllReducer);

/* global document */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

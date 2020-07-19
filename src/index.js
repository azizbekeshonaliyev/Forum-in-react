import './scss/custom.scss';

import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/container/homePage-container';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from './store';
import routes from './router';

ReactDom.render(
  <Provider store={store}>
  {routes}
  </Provider>,
  document.getElementById('app')
);

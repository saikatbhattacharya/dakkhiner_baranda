import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom'
import homePage from './components/container/homePage-container';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from './store';

// Create an enhanced history that syncs navigation events with the store
export default (
    <Router history={browserHistory}>
      <Route path="/" component={homePage} />
    </Router>
);


import React from 'react';

import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './app';
import Post from './post';

import { Provider } from 'react-redux';
import store, { history } from './store';

import css from './styles/style.styl';

const AppRouter = (
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App} />
      <Route path="/:postId" component= {Post} />
    </Router>
  </Provider>
);

render(AppRouter, document.getElementById('root'));
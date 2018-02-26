import React from 'react';
import { render } from 'react-dom';
import App from './App.js'
import { Provider } from 'react-redux';
import compiler from './services/reducers/compiler';
import { createStore, applyMiddleware } from 'redux';
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk';
import TicketEditPage from "./containers/TicketEditPage";

const middleware = [
  thunkMiddleware
];

let createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
let store = createStoreWithMiddleware(
  compiler
);


// <App />
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path="/ticket/:ticket" component={TicketEditPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

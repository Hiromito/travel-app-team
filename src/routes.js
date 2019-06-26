import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Login {...props} />} />
      <Route path="/dashboard" exact render={props => <Dashboard {...props} />} />
    </Switch>
  </BrowserRouter>);

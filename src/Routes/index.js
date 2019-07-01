import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';

import * as ROUTES from 'config/routes';

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={Login} />
      <Route path={ROUTES.HOME} component={Dashboard} />
    </div>
  </Router>
);

export default App;
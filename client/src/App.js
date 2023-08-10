import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/register'
import Tier from './pages/tier'
import Login from './pages/login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/tier" component={Tier} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App

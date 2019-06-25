import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './views/Layout';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import PasswordRecovery from './views/PasswordRecovery';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './views/Layout';
import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

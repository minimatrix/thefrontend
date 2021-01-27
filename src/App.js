import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

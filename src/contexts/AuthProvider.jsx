import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Signup from '../pages/Signup';
import Features from '../pages/Features';
import Login from '../pages/Login';
import HireDevelopers from '../pages/HireDevelopers';
import BespokeSoftware from '../pages/BespokeSoftware';
import Contact from '../pages/Contact';
import About from '../pages/About';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

const authToken = JSON.parse(localStorage.getItem('app_tokens'));

const UnauthedApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hire-developers">
          <HireDevelopers />
        </Route>
        <Route path="/bespoke-software">
          <BespokeSoftware />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      localStorage.setItem('app_tokens', JSON.stringify(action.payload));
      return {
        ...state,
        ...action.payload,
      };
    case 'clear':
      localStorage.removeItem('app_tokens');
      return {};
    default:
      return state;
  }
};

const AuthProvider = ({ children, schema, ...props }) => {
  const [state, dispatch] = useReducer(authReducer, authToken ? authToken : {});

  return <AuthContext.Provider value={{ state, dispatch, schema }}>{state.token ? children : <UnauthedApp {...props} />}</AuthContext.Provider>;
};

export default AuthProvider;

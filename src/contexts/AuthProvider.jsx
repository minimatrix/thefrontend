import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Playground from '../testing/Playground';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

const authToken = JSON.parse(localStorage.getItem('app_tokens'));

const UnauthedApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/playground">
          <Playground />
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
      console.log({ action });
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
  console.log({ state });
  return (
    <AuthContext.Provider value={{ state, dispatch, schema }}>
      {state.token ? children : <UnauthedApp {...props} />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

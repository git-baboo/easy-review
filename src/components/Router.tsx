import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthContext from '@/components/AuthContext';
import PrivateRoute from '@/components/PrivateRoute';
import TopPage from '@/pages';
import DetailPage from '@/pages/detail';
import LoginPage from '@/pages/login';
import ReviewPage from '@/pages/review';
import authReducer from '@/utils/authReducer';
import { listenAuthState } from '@/utils/firebase';

const Router = () => {
  const [state, dispatch] = useReducer(authReducer.reducer, authReducer.initialState);

  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={state}>
          <PrivateRoute path="/" component={TopPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute path="/:owner/:repo/:pullNumber" component={DetailPage} />
          <PrivateRoute path="/:owner/:repo/:pullNumber/review" component={ReviewPage} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthContext from '@/components/AuthContext';
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
          <Route exact path="/" component={TopPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/:owner/:repo/:pullNumber" component={DetailPage} />
          <Route exact path="/:owner/:repo/:pullNumber/review" component={ReviewPage} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

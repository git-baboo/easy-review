import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import PrivateRoute from '@/components/PrivateRoute';
import TopPage from '@/pages';
import DetailPage from '@/pages/detail';
import LoginPage from '@/pages/login';
import ReviewPage from '@/pages/review';
import { currentUserState } from '@/store/currentUserState';
import { CurrentUserType } from '@/types/CurrentUserType';
import { auth } from '@/utils/firebase';

const Router = () => {
  const setCurrentUser = useSetRecoilState<CurrentUserType>(currentUserState);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser((prevState) => ({
        ...prevState,
        isSignedIn: true,
      }));
    } else {
      setCurrentUser({
        isSignedIn: false,
        username: '',
        accessToken: '',
      });
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <>
          <PrivateRoute path="/" component={TopPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute path="/:owner/:repo/:pullNumber" component={DetailPage} />
          <PrivateRoute path="/:owner/:repo/:pullNumber/review" component={ReviewPage} />
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopPage from '@/pages';
import DetailPage from '@/pages/detail';
import LoginPage from '@/pages/login';
import ReviewPage from '@/pages/review';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/:owner/:repo/:pullNumber" component={DetailPage} />
        <Route exact path="/:owner/:repo/:pullNumber/review" component={ReviewPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

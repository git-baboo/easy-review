import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// TODO: 作業用・後に削除
import Popover from '@/components/review/Popover';
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
        {/* TODO: 作業用・後に削除 */}
        <Route exact path="/popover" component={Popover} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '@/components/Header';
import TopPage from '@/pages';
import DetailPage from '@/pages/detail';
import LoginPage from '@/pages/login';
import ReviewPage from '@/pages/review';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        {/* TODO: 動作確認用に追加しているため、確認後は要削除*/}
        <Route exact path="/header" component={Header} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/:owner/:repo/:pullNumber" component={DetailPage} />
        <Route exact path="/:owner/:repo/:pullNumber/review" component={ReviewPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

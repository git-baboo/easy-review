import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const TopPage = () => {
  const history = useHistory();

  return (
    <>
      <h1>TopPage</h1>
      <Button onClick={() => history.push('/login')}>ログイン画面</Button>
      <Button onClick={() => history.push('/pull-requests/1')}>詳細画面</Button>
      <Button onClick={() => history.push('/pull-requests/1/review')}>レビュー画面</Button>
    </>
  );
};

export default TopPage;

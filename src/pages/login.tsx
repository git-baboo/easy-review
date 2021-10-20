import { Button } from '@chakra-ui/react';
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

const LoginPage = () => {
  return (
    <>
      <style>{'body{background-color:teal}'}</style>
      <h1>LoginPage</h1>
      <Button
        leftIcon={<DiGithubBadge color="black" size="25" />}
        color="white"
        borderColor="white"
      >
        <a style={{ color: 'black' }}>ログイン</a>
      </Button>
    </>
  );
};

export default LoginPage;

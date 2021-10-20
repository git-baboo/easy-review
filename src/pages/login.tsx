import { Button } from '@chakra-ui/react';
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

const LoginPage = () => {
  return (
    <>
      <h1>LoginPage</h1>
      <Button leftIcon={<DiGithubBadge color="black" size="30" />} colorScheme="blue">
        <a style={{ color: 'black' }}>ログイン</a>
      </Button>
    </>
  );
};

export default LoginPage;

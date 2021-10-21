import { Button } from '@chakra-ui/react';
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

const LoginButton = () => {
  return (
    <Button leftIcon={<DiGithubBadge color="black" size="25" />} bgColor="white" mt={8}>
      ログイン
    </Button>
  );
};

export default LoginButton;

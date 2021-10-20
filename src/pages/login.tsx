import { Button, Box } from '@chakra-ui/react';
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

const LoginPage = () => {
  return (
    <Box bgColor="teal.500" h="100vh">
      <h1>LoginPage</h1>
      <Button leftIcon={<DiGithubBadge color="black" size="25" />} bgColor="white">
        ログイン
      </Button>
    </Box>
  );
};

export default LoginPage;

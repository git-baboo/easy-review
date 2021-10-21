import { Box } from '@chakra-ui/react';
import React from 'react';

import LoginButton from '@/components/LoginButton';

const LoginPage = () => {
  return (
    <Box bgColor="teal.500" h="100vh">
      <h1>LoginPage</h1>
      <LoginButton />
    </Box>
  );
};

export default LoginPage;

import { Box } from '@chakra-ui/react';
import React from 'react';

import Buttons from '@/components/Button';

const LoginPage = () => {
  return (
    <Box bgColor="teal.500" h="100vh">
      <h1>LoginPage</h1>
      <Buttons label="ログイン" />
    </Box>
  );
};

export default LoginPage;

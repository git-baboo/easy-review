import { Box } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box pl={16} height={36} alignItems="center" textColor="white" bg="teal.500">
      今日のご飯は何にしよう
    </Box>
  );
};

export default Header;

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from '@/components/Router';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

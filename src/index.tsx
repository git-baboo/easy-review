import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import Router from '@/components/Router';

ReactDOM.render(
  <ChakraProvider>
    <RecoilRoot>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </RecoilRoot>
  </ChakraProvider>,
  document.getElementById('root')
);

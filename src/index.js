import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import {} from '@chakra-ui/react';
import App from './App';
import customTheme from './utils/theme';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);

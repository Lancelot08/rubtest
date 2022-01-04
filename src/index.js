import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fonts from './components/fonts';
import theme from './components/theme';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import {
  Provider
} from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ChakraProvider theme={theme} >
        <Fonts />
        <ColorModeScript initialColorMode="dark" />
        <App />
      </ChakraProvider>
    </StrictMode>
  </Provider>,
  document.getElementById('dapp_minter')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();


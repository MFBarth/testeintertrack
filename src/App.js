import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;

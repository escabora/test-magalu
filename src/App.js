import React from 'react';
import { Provider } from 'react-redux';

import { Routes } from './routes';

export const App = ({ store }) => (
  <Provider store={store}>
      <Routes />
  </Provider>
);

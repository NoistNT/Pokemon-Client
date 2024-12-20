import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { store } from '@/redux/store';

import { App } from './App';
import './index.css';

const rootElement = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

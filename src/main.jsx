import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import BankApp from './BankApp';
import { store } from './store/';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* utilizo HashRouter en lugar de BrowserRouter para github web. */}
    <HashRouter>
        <BankApp />
        </HashRouter>
    </Provider>
  </React.StrictMode>,
)

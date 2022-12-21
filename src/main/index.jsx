import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Application from './component/Application';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);

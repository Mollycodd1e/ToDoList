import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app.jsx';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './components/store/reducer.js';

const store = configureStore({reducer: reducer});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


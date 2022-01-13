import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import browserHistory from './browser-history.js';
import App from '../src/components/app/app.jsx';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './components/store/reducer.js';
import '../src/sass/style.scss';

const store = configureStore({reducer: reducer});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter history={browserHistory}>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


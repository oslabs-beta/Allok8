import React from 'react';
import { render } from 'react-dom';
import App from './Components/App.jsx';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import styles from './Assets/master.css';

render(
    <Provider store={store}>
      <App/> 
    </Provider>,
  document.getElementById('root')
);
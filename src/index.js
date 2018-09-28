import React from 'react';
import ReactDOM from 'react-dom';
// import RunAgain from '../src/components/RunAgain/Test';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById ('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
// import RunAgain from '../src/components/RunAgain/Test';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import SymbolsTextFields from './components/SymbolsTextFields/SymbolsTextFields';

// import InteractiveList from './components/InteractiveList/InteractiveList';
import Symbol from './components/Symbol/Symbol';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<SymbolsTextFields />, document.getElementById('root'));
ReactDOM.render(<SymbolsTextFields />, document.getElementById('root'));

// ReactDOM.render (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById ('root')
// );

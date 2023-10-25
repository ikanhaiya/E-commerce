import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>  // responsible for providing the redux store facility to our app and its component component
    <BrowserRouter>
      <App />
    </BrowserRouter>
   //</Provider> 
);




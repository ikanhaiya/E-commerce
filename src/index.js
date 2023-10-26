import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /* provider is component class, once passed store object in it will be able to give that redux store 
  context to the rest of the application so that we can dispatch actions to that store or we can pull values off a store 
  into our component*/

 <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider> 
);




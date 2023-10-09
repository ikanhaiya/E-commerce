import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';


function App() {
  return (

    <div>
      <Header /> 
      {/* header will always be on top because react-dom will manipulate routes component children */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Productos from './components/products/Productos';
import FormProduct from './components/form/form';

function App() {
  return (
    <div className = 'App'>
        <Header prop = "Productos"/>
          <FormProduct/>
          <Productos/>
        <Footer prop = "Prueba Técnica para @BlueCorner Inc."/>
    </div>
  );
}

export default App;
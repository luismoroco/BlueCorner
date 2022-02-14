import React, { useEffect, useState } from 'react';

import './App.css';

import Axios from 'axios';

import Header from './components/header/Header';
import Etiquetas from './components/Etiqueta/Etiqueta';
import Footer from './components/footer/Footer';
import Productos from './components/products/Productos';

function App() {
  const [NameProducto, setNameProducto] = useState('');

  const handleNameProducto = (e) => {
    setNameProducto(e.target.value);
  };

  const refreshPage = () => {
    window.location.reload();
  }

  const submitProducto = (e) => {
    Axios
      .post('http://localhost:5000/endpoint/save', {NameProducto : NameProducto})
      .then(() => alert('succefull'))
      .catch((err) => {console.error(err)});
      
      e.preventDefault();
      setNameProducto('');
      refreshPage();
  };

  return (
    <div className = 'App'>
        <Header prop = {"Productos"}/>

        <form onSubmit = {submitProducto}>
            <label> Nombre : </label>
              <input
                  type = 'text'
                  value = {NameProducto}
                  onChange = {handleNameProducto}
                  required
                  placeholder = 'Red Bull 0.3L'
                  minLength ='2'
              />
        </form>

        <Etiquetas/>
        <Productos/>

        <Footer prop = {"Prueba Técnica para @BlueCorner Inc."}/>
    </div>
  );
}

export default App;
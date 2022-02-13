import React, { useState } from 'react';

import './App.css';

import Axios from 'axios';

import Header from './components/header/Header';

function App() {
  const [NameProducto, setNameProducto] = useState('');

  const handleNameProducto = (e) => {
    setNameProducto(e.target.value);
  };

  const submitProducto = () => {
    Axios
      .post('http://localhost:5000/endpoint/save', {NameProducto : NameProducto})
      .then(() => alert('SE INSERTÓ :V'))
      .catch((err) => {console.error(err)});
  };

  return (
    <div className = 'App'>
        <Header prop = {"Productos"}/>

        <div className = 'form'>
          <label> Nombre : </label>
            <input 
              type = 'text' 
              name = 'NameProducto' 
              placeholder = 'Red Bull 0.3L' 
              is required
              minLength = '2'
              onChange = {handleNameProducto}
            />
          <button onClick = {submitProducto} > Buscar </button>
        </div>

    </div>
  );
}

export default App;
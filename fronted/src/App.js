import React, { useState } from 'react';

import './App.css';

import Axios from 'axios';

import Header from './components/header/Header';

function App() {
  const [NameProducto, setNameProducto] = useState('');

  const handleNameProducto = (e) => {
    setNameProducto(e.target.value);
  };

  const submitProducto = (e) => {
    Axios
      .post('http://localhost:5000/endpoint/save', {NameProducto : NameProducto})
      .then(() => alert('SE INSERTÓ :V'))
      .catch((err) => {console.error(err)});
      
      e.preventDefault();
      setNameProducto('');
  };

  return (
    <div className = 'App'>
      
        <Header prop = {"Productos"}/>

        <form onSubmit = {submitProducto}>
            <label> Nombre : </label>
              <input
                  type = "text"
                  value = {NameProducto}
                  onChange = {handleNameProducto}
                  required
                  placeholder = 'Red Bull 0.3L'
                  minLength ='2'
              />
        </form>

    </div>
  );
}

export default App;
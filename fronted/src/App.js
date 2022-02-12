import React, { useState } from 'react';


import './App.css';


import Axios from 'axios';


function App() {

  // Hooks 

  const [NameProducto, setNameProducto] = useState('');

  const handleNameProducto = (e) => {
    setNameProducto(e.target.value);
  }

  const submitProducto = () => {};

  return (
    <div className = 'App'>
        <h1> Hello World! </h1>

        <div className = 'form'>
          <label> Nombre : </label>
            <input 
              type = 'text' 
              name = 'nombreProducto' 
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
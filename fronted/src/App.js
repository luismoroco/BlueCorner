import React, { useEffect, useState } from 'react';

import './App.css';

import Axios from 'axios';

import Header from './components/header/Header';

function App() {
  const [NameProducto, setNameProducto] = useState('');
  const [listProductos, setListProductos] = useState([]);

  useEffect(() => {
    Axios
      .get('http://localhost:5000/endpoint/getProductos')
      .then((response) => {setListProductos(response.data)});
  }, []);

  const handleNameProducto = (e) => {
    setNameProducto(e.target.value);
  };

  const refreshPage = () => {
    window.location.reload();
  }

  const submitProducto = (e) => {
    Axios
      .post('http://localhost:5000/endpoint/save', {NameProducto : NameProducto})
      .then(() => alert('SE INSERTÓ :V'))
      .catch((err) => {console.error(err)});
      
      e.preventDefault();
      setNameProducto('');
      refreshPage();
  };

  console.log('LINEA 38', listProductos);

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

        <ol>
            {
              listProductos.map((e) => {
                return (
                  <h5> ID: {e.Id_producto}  |  NM: {e.Nombre} </h5>
                );
              })
            }
        </ol>

    </div>
  );
}

export default App;
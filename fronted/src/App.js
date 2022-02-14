import React, { useEffect, useState } from 'react';

import './App.css';

import Axios from 'axios';

import Header from './components/header/Header';
import Etiquetas from './components/Etiqueta/Etiqueta';

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
      .then(() => alert('succefull'))
      .catch((err) => {console.error(err)});
      
      e.preventDefault();
      setNameProducto('');
      refreshPage();
  };

  const deleteReview = (idProducto) => {
    Axios
      .delete(`http://localhost:5000/endpoint/delete/${idProducto}`)
      .then(() => alert('succefull'))
      .catch((err) => {console.error(err)});
  }

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

        <ol>
            {
              listProductos.map((e) => {
                return (
                  <>
                    <h5> ID: {e.Id_producto}  -------  NM: {e.Nombre} </h5>
                    <button onClick = {() => {deleteReview(e.Id_producto)}} > Delete </button>
                    <input type = 'text' id = 'UpdateNameProducto'/>
                    <button> Update </button>
                  </>
                );
              })
            }
        </ol>

    </div>
  );
}

export default App;
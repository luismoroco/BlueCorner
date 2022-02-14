/*
*   @Producto  Componente Producto
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   Hooks :
*       - [listProductos, setListProductos] = guardará nustros productos
*
*   - useEffect : para solo alterar nuestra lista cuando cambie
*   - deleteProducto : recibirá el 'idProducto'(int) y enviará el 'id' ala ruta delete, al backend, y será eliminada
*   - Mapeamos nuestros productos por ID y Nombre, junto con 'productLabel' que mapeará sus etiquetas
*/

import React, {useEffect, useState} from 'react'

import Axios from 'axios';

import ProductLabel from './ProductLabel';

import refreshPage from '../../functions/functions';

export const Productos = ( ) => {
    const [listProductos, setListProductos] = useState([]);

    useEffect(() => {
        Axios
          .get('http://localhost:5000/endpoint/getProductos')
          .then((response) => {setListProductos(response.data)});
    }, []);

    const deleteProducto = (idProducto) => {
        Axios
          .delete(`http://localhost:5000/endpoint/delete/${idProducto}`)
          .then(() => alert('succefull'))
          .catch((err) => {console.error(err)});
    
          refreshPage();
    };

    return (
        <>
        <h2> Productos </h2>
        <ol>
            {
              listProductos.map((e) => {
                return (
                  <>
                    <h5 key = { e.Id_producto }> ID: { e.Id_producto }  -----  NM: { e.Nombre } </h5>
                    <button onClick = {() => {deleteProducto(e.Id_producto)}} > Delete </button>
                    <ProductLabel idProducto = { e.Id_producto }/>
                  </>
                );
              })   
            }
        </ol>
        </>
    );
};

export default Productos;
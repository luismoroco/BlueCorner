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
          <h2> Almacenados </h2>
          <table>
              <tr>
                <th> Producto </th>
                <th> Etiquetas </th>
                <th> Accion </th> 
              </tr>
                      {
                        listProductos.map((e) => {
                          return (
                            <tr  key = { e.Id_producto }>
                              <td> { e.Nombre } </td>
                              <td> <ProductLabel idProducto = { e.Id_producto }/> </td>
                              <td> <button onClick = {() => {deleteProducto(e.Id_producto)}} > X </button> </td>
                            </tr>
                          );
                        })   
                      }
          </table>
        </>
    );
};

export default Productos;
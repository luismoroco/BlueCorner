/*
*   @Forms  Componente principal
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   Hooks :
*       - [NameProducto, setNameProducto] = guardará el nombre del producto
*       - [Etiquetas, setEtiquetas] = guardará las etiquetas de cada producto
*
*   - handleRemoveItem : usará 'fiter' para remover de la lista de etiquetas a 'e'
*   - submitProducto : enviará [NameProducto(string) && listEtiquetas(array)] a la ruta '../save' en el backend, para ser guardado
*   - retornaremos un form con un componente 'Addname' que actualizará el contenido de 'NameProducto'
*   - 'AddEtiqueta' procesará la lista dinámica de 'Etiquetas' para ser guardada.
*   - usaremos (map), para mostrar todos nuestras etiquetas
*/

import React, { useState } from 'react';

import AddEtiqueta from '../labels/AddEtiqueta';
import AddName from './addName';

import Axios from 'axios';

import refreshPage from '../../functions/functions';

export const FormProduct = () => {
    const [NameProducto, setNameProducto] = useState('');
    const [Etiquetas, setEtiquetas] = useState([]);

    const handleRemoveItem = e => {
        const listTemp = [...Etiquetas];
        listTemp.splice(e, 1);
        setEtiquetas(listTemp);
    };

    const submitProducto = (e) => {
        Axios
        .post('http://localhost:5000/endpoint/save', {NameProducto : NameProducto, lisEtiquetas : Etiquetas})
        .then(() => alert('succefull'))
        .catch((err) => {console.error(err)});
        
        e.preventDefault();
        setNameProducto('');
        setEtiquetas([]);
        refreshPage();
    };

    return (
        <>  
            <form onSubmit = { submitProducto }>
                <AddName setNameProducto = { setNameProducto }/>
            </form>
            
            <p> Etiquetas </p>
            <AddEtiqueta setEtiquetas = { setEtiquetas }/>
                <br/>
                <table>
                    <tr>
                        <th> Etiqueta </th>
                        <th> Acción </th>
                    </tr>
                            {
                                Etiquetas.map((e) => {
                                    return (
                                        <tr key = { e }>
                                            <td> { e } </td>
                                            <td> <button onClick = {() => handleRemoveItem(e)}> X </button> </td>
                                        </tr>
                                    );
                                })
                            }
                </table>
        </>
    );
};

export default FormProduct;
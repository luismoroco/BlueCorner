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
        .post('http://localhost:5000/endpoint/save', {NameProducto : NameProducto})
        .then(() => alert('succefull'))
        .catch((err) => {console.error(err)});
        
        e.preventDefault();
        setNameProducto('');
        refreshPage();
    };

    return (
        <>
            <form onSubmit = { submitProducto }>
                <AddName setNameProducto = { setNameProducto }/>
            </form>
            
            <AddEtiqueta setEtiquetas = { setEtiquetas }/>
            <ol>
                    {
                        Etiquetas.map((e) => {
                            return (
                                <>
                                    <button onClick = {() => handleRemoveItem(e)}> Borrar </button>
                                    <h5 key = {e} > {e} </h5>
                                </>
                            );
                        })
                    }
            </ol>
        </>
    );
};

export default FormProduct;
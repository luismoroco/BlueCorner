/*
*   @ProductLabel  Componente - Etiquetas del producto
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   Hooks :
*       - [listEtiquetasProducto, setListEtiquetasProducto] = guardará nustros etiqeutas del productos
*
*   - useEffect : para solo alterar nuestra lista cuando cambie
*   - get(`http://localhost:5000/endpoint/getLabels/${idProducto}`) enviará el idProducto de cada Producto, para traer sus Etiquetas y ser almacenadas en el Hook
*   - Mapeamos nuestros etiquetas por ID y Nombre.
*   - Usaremos PropTypes, para asegurarnos que el IdProducto sea un número y que exista.
*/

import React, {useEffect, useState} from 'react'

import PropTypes from 'prop-types';

import Axios from 'axios';

export const ProductLabel = ({ idProducto }) => {
    const [listEtiquetasProducto, setListEtiquetasProducto] = useState([]);

    useEffect(() => {
      Axios
        .get(`http://localhost:5000/endpoint/getLabels/${idProducto}`)
        .then((response) => {setListEtiquetasProducto(response.data)});
    }, [listEtiquetasProducto]);

    return (
        <>
            <ol>
                {
                    listEtiquetasProducto.map((e) => {
                        return (
                            <div key = {e.Nombre}>
                                { e.Nombre + ' ' } 
                            </div>
                        );
                    })
                }
            </ol>
        </>
    );
};

ProductLabel.propTypes = {
    idProducto : PropTypes.number.isRequired
};

export default ProductLabel;
import React, {useEffect, useState} from 'react'

import PropTypes from 'prop-types';

import Axios from 'axios';

export const ProductLabel = ({ idProducto }) => {
    const [listEtiquetasProducto, setListEtiquetasProducto] = useState([]);

    useEffect(() => {
      Axios
        .get(`http://localhost:5000/endpoint/getLabels/${idProducto}`)
        .then((response) => {setListEtiquetasProducto(response.data)});
    }, []);

    return (
        <>
            <h2> Etiquetas Asociadas </h2>
            <ol>
                {
                    listEtiquetasProducto.map((e) => {
                        return (
                            <>
                                <h6 key = {e.Id_etiqueta}> { e.Nombre } </h6>
                            </>
                        );
                    })
                }
            </ol>
        </>
    );
};

ProductLabel.propTypes = {
    idProducto : PropTypes.number.isRequired
}

export default ProductLabel;
import React, { useState } from 'react'

import AddEtiqueta from './AddEtiqueta';

export const Etiquetas = () => {
    const [Etiquetas, setEtiquetas] = useState([]);

    const handleRemoveItem = e => {
        const listTemp = [...Etiquetas];
        listTemp.splice(e, 1);
        setEtiquetas(listTemp);
    };

    return (
        <>
            <h2> Etiquetas </h2>
            <AddEtiqueta setEtiquetas = {setEtiquetas}/>

            <ol>
                {
                    Etiquetas.map((e) => {
                        return (
                            <>
                                <button onClick = {() => handleRemoveItem(e)}> Borrar </button>
                                <h5> {e} </h5>
                            </>
                        );
                    })
                }
            </ol>
        </>
    );
};

export default Etiquetas;
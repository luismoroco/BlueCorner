import React, { useState } from 'react'

import AddEtiqueta from './AddEtiqueta';

export const Etiquetas = () => {
    const [Etiquetas, setEtiquetas] = useState([]);

    return (
        <>
            <h2> Etiquetas </h2>
            <AddEtiqueta setEtiquetas = {setEtiquetas}/>

            <ol>
                {
                    Etiquetas.map((e) => {
                        return (
                            <h5> {e} </h5>
                        );
                    })
                }
            </ol>
        </>
    );
};

export default Etiquetas;
/*
*   @Header COmponente Head
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {string} :  prop : contenido de nuestro Head, envuelto en un componente
*   
*   - Usaremos Proptypes para asegurarnos de recibir un string y que exista
*/

import React from "react";

import './Header.css'

const Headert = ({prop}) => {
    return (
        <>
            <h1> { prop } </h1>
        </>
    );
};

export default Headert;
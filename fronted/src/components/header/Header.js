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

import PropTypes from 'prop-types';

const Header = ({prop}) => {
    return (
        <>
            <h1 className = 'text-center'> { prop } </h1>
        </>
    );
};

Header.propTypes = {
    Header : PropTypes.string.isRequired

};

export default Header;
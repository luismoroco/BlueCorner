/*
*   @Footer Componente Foot
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {string} :  prop : contenido de nuestro Footer, envuelto en un componente
*   
*   - Usaremos Proptypes para asegurarnos de recibir un string y que exista
*/

import React from "react";

import PropTypes from 'prop-types';

const Footer = ({prop}) => {
  return (
      <div className = 'container'>
        <span className = 'copyright'>&copy; {prop} </span>
      </div>
  );
};

Footer.propTypes = {
  Footer : PropTypes.string.isRequired
};

export default Footer;
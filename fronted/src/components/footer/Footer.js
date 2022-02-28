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

const Footer = ({prop}) => {
  return (
      <div className = 'container'>
        <span className = 'copyright'>&copy; {prop} </span>
      </div>
  );
};

export default Footer;
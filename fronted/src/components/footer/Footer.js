import React from "react";

import PropTypes from 'prop-types';

const Footer = ({prop}) => {
  return (
    <footer className = 'footer'>
      <div className = 'container'>
        <span className = 'copyright'>&copy; {prop} </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  Footer : PropTypes.string.isRequired
};

export default Footer;
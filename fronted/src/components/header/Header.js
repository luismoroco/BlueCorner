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
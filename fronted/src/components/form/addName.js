import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AddName = ({ setNameProducto }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChangue = (e) => {
        setInputValue(e.target.value);
        setNameProducto(inputValue);
    };

    return (
        <>
                <p> Nombre </p>
                <input 
                    type = 'text'
                    value = { inputValue }
                    onChange = { handleInputChangue }
                    required
                    placeholder = 'Red Bull 0.3L'
                    minLength ='2'
                /> 
        </>
    );
};

AddName.propTypes = {
    setNameProducto : PropTypes.func.isRequired
};

export default AddName;
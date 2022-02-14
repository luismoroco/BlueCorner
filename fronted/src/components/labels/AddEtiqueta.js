import React, {useState} from 'react'

import PropTypes from 'prop-types';

const AddEtiqueta = ({setEtiquetas}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChangue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEtiquetas(cats => [...cats, inputValue]);
        setInputValue('');
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = 'text'
                value = {inputValue}
                onChange = {handleInputChangue}
                required
                minLength = '2'
                placeholder = 'Hogar, Limpieza'
            />
        </form>
    );
};

AddEtiqueta.propTypes = {
    setEtiquetas : PropTypes.func.isRequired
}

export default AddEtiqueta;
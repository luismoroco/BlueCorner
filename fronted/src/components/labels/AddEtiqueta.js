/*
*   @AddEtiqueta
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {function} :  setEtiquetas es una función que actualiza el conteido de Etiquetas en ./FormProducto
*   
*   - Usaremos Proptypes para asegurarnos de recibir un string y que exista
*   - Usaremos un Hook [inputValue, setInputValue] para procesar las etiquetas, serán agregadsa de manera estandar
*   - Devolvemos un componente de tipo form para recibir las estiquetas y exportamos el componente
*/

import React, {useState} from 'react'

import PropTypes from 'prop-types';

export const AddEtiqueta = ({setEtiquetas}) => {
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
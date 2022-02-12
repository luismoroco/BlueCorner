import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChangue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(cats => [...cats, inputValue]);
        setInputValue('');
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value = {inputValue}
                onChange = {handleInputChangue}
                required
                minLength ='2'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory;
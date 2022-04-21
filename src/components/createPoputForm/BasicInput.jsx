/**
 *  Creating a basic input to speed up the creation of fields in formik.
 */
import React from 'react'

// Returns a basic input and label.
const BasicInput = ({ htmlFor, title, type, id, name, placeholder, onChange, onBlur }) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{title}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            /> 
        </div>
    )
}

export default BasicInput
/**
 *  Creating a basic input to speed up the creation of fields in formik.
 */
import React from 'react'

// Returns a basic input and label.
const BasicInput = ({ htmlFor, title, type, id, name, placeholder, onChange, onBlur, error }) => {
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
            <span> {error} </span>
        </div>
    )
}

export default BasicInput
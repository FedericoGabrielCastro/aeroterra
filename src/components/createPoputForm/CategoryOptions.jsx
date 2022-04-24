/**
 * https://react-select.com/home#getting-started React-select
 */

import React from 'react'
import Select from 'react-select'

// Set value to will be pass into the formik form.
const setValue = (options, value) => {
    return options ? options.find(options => options.value === value) : ""
}

// Render select with custom options FORMIK
const CategoryOptions = ({ htmlFor, title, onChange, value, options, className}) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{title}</label>
            <Select className={className}
                styles={optStyle}
                value={setValue(options,value)} // Select correct Value.
                onChange={value => onChange(value)} // Change value after switch.
                options={options}
            />
        </div>
    )
}

// React-select style
const optStyle = {
    control: (styles) => ({ ...styles, backgroundColor: "rgba(255, 255, 255, .15)"}), // Select menu.
    option: (provided, state) => ({ //Opt menu
            ...provided,
            fontWeight: state.isSelected ? "bold" : "normal",
            color: state.isSelected ? '#fff' : '#000',
            textAlign: "center",
        }),
    menu: (provided, state) => ({ //Opt menu
        ...provided,
        padding: 20,        
    }),     
}

export default CategoryOptions
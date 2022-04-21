import React from 'react'
import { useFormik } from 'formik'
import styles from "./CreatePoputFormStyle.module.css"

import BasicInput from './BasicInput'
import CategoryOptions from './CategoryOptions'
import CoordsSelect from './CoordsSelect'

// Category Options.
const options = [
    {value: 'commercial', label: 'Comercial'},
    {value: 'residential', label: 'Residencial'},
    {value: 'mixed', label: 'Mixta'}
]

// Basic form input/label data.
const inputs = [
    {title: "Nombre: " ,htmlFor: "name", type: "text", id: "name", name: "name", placeholder: "ej:Av. E. Madero 1020"},
    {title: "Dirección: " ,htmlFor: "address", type: "text", id: "address", name: "address", placeholder: "ej:Av. E. Madero 1020"},
    {title: "Teléfono: " ,htmlFor: "tel", type: "number", id: "tel", name: "tel", placeholder: "ej: 54 9 11 5272 0900"}
]

const CreatePoputForm = () => {

    // Manage all formik props.
    const formik = useFormik({
        initialValues: {
            name: "", // String
            address: "", // String
            tel: "", // Number 
            category: "commercial", // Options <Comercial - Residencial - Mixta>
            coord: "" // 
        },
        onSubmit: values => {console.log(values)},
    })
    
    return (
        <form className={styles.formContent} onSubmit={formik.handleSubmit}>
            {
                inputs.map((item, index) => {
                    return <BasicInput key={index}
                        htmlFor={item.name} 
                        title={item.title} // Label title.
                        type={item.name} // Type input.
                        id={item.id} // ID input.
                        name={item.name} 
                        placeholder={item.placeholder} 
                        onChange={formik.handleChange} // Formik props.
                        onBlur={formik.onBlur}
                    />
                })
            }
            <CategoryOptions 
                className={styles.selectOpt}
                htmlFor={"category"}
                title="Categoría:"
                onChange={value => formik.setFieldValue('category', value.value).handleChange} // Set Value = options select.
                options={options}
            />
            <div>
                <CoordsSelect
                    className={styles.iconMap}
                    htmlFor={"coord"}
                    title={"Coords"}
                />
            </div>
            <button className={styles.buttonSubmit} type="submit"> Colocar </button>
        </form>
    )
}

export default CreatePoputForm
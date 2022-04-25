import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import {v4 as uuid} from 'uuid'
import styles from "./CreatePoputFormStyle.module.css"

import BasicInput from './BasicInput'
import CategoryOptions from './CategoryOptions'
import CoordsSelect from './CoordsSelect'

import { addDataFormAction } from '../../redux/actions/setDataFormAction'

// Category Options.
const options = [
    {value: 'comercio', label: 'comercio'},
    {value: 'home', label: 'home'},
    {value: 'mixta', label: 'mixta'}
]

// Basic form input/label data.
const inputs = [
    {title: "Nombre: " ,htmlFor: "name", type: "text", id: "name", name: "name", placeholder: "ej:Av. E. Madero 1020"},
    {title: "Dirección: " ,htmlFor: "address", type: "text", id: "address", name: "address", placeholder: "ej:Av. E. Madero 1020"},
    {title: "Teléfono: " ,htmlFor: "tel", type: "number", id: "tel", name: "tel", placeholder: "ej: 54 9 11 5272 0900"}
]

const CreatePoputForm = () => {

    const dispatch = useDispatch()
    const [coords, setCoords] = useState("")

    const data = useSelector(store => store.getLocationForFormReducer)


    // Validation formik
    const formSchema = yup.object().shape({
        name: yup.string()
            .required("Nombre requerido")
            .max(10, "Nombre 10 caracteres maximo"),
        address: yup.string()
            .required("Dirreccion requerida")
            .max(10, "Dirreccion 10 caracteres maximo"),
        tel: yup.number()
            .min(8, "Tel minimo 8 numeros"), 
        coord: yup.string()
            .required("Elige unas coordenadas")
    })

    // Manage all formik props.
    const formik = useFormik({
        initialValues: {
            name: "", // String
            address: "", // String
            tel: 0, // Number 
            category: "mixta", // Options <Comercial - Residencial - Mixta>
            coord: undefined,
        },
        validationSchema: formSchema,
        onSubmit: values => {
            console.log(values.coord)
            dispatch(addDataFormAction({
                name: values.name,
                address: values.address,
                tel: values.tel,
                category: values.category,
                coord: values.coord.split(','),
                id: uuid()
            }))
        },
    })

    useEffect(() => {
        setCoords(`${data.latitude},${data.longitude}`)
        formik.setFieldValue('coord', coords)
    }, [data.latitude, data.longitude, coords])

    
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
                    value={coords}
                    htmlFor={"coord"}
                    title={"Coords"}
                    name="coord"
                    onChange={formik.handleChange} // Formik props.
                    onBlur={formik.onBlur}
                />
            </div>
            <button className={styles.buttonSubmit} type="submit"> Colocar </button>
            <span> { formik.errors.name || formik.errors.address || formik.errors.tel } </span>
        </form>
    )
}

export default CreatePoputForm
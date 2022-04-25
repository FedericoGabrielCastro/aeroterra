/**
 * Display a new map to be pass into the formik form and return
 * coords (x, y)
 */
import React from 'react'
import { useDispatch } from 'react-redux'

import { FaMapMarked } from 'react-icons/fa'

import { showMapModalAction } from '../../redux/actions/showMapModalAction'

// Diplay form to capture coords (x,y)
const CoordsSelect = ({ htmlFor, className, onChange, onBlur, name, value }) => {

    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(showMapModalAction())
    }

    return (
        <div>
            <label htmlFor={htmlFor}></label>
            <FaMapMarked className={className} onClick={handleOpenModal} />
            <input 
                name={name}
                onBlur={onBlur}
                type="text"
                onChange={onChange}
                value={value}
                />
        </div>
    )
}

export default CoordsSelect
/**
 * Display a new map to be pass into the formik form and return
 * coords (x, y)
 */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FaMapMarked } from 'react-icons/fa'

import { showMapModalAction } from '../../redux/actions/showMapModalAction'

// Diplay form to capture coords (x,y)
const CoordsSelect = ({ htmlFor, title, className }) => {

    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(showMapModalAction())
    }

    return (
        <div>
            <label htmlFor={htmlFor}></label>
            <FaMapMarked className={className} onClick={handleOpenModal} />
            <input />
        </div>
    )
}

export default CoordsSelect
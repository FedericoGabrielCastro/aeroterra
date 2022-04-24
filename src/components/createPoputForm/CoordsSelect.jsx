/**
 * Display a new map to be pass into the formik form and return
 * coords (x, y)
 */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FaMapMarked } from 'react-icons/fa'

import { showMapModalAction } from '../../redux/actions/showMapModalAction'

// Diplay form to capture coords (x,y)
const CoordsSelect = ({ htmlFor, className, onChange, onBlur, name }) => {

    const [coords, setCoords] = useState("")

    const dispatch = useDispatch()

    const data = useSelector(store => store.getLocationForFormReducer)

    const handleOpenModal = () => {
        dispatch(showMapModalAction())
    }

    useEffect(() => {
        setCoords(`${data.latitude}, ${data.longitude}`)
    }, [data.latitude, data.longitude])

    return (
        <div>
            <label htmlFor={htmlFor}></label>
            <FaMapMarked className={className} onClick={handleOpenModal} />
            <input 
                name={name}
                onBlur={onBlur}
                type="text"
                value={coords}
                onChange={value => onChange(value)}
                />
        </div>
    )
}

export default CoordsSelect
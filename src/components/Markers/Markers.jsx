import React from 'react'
import { useDispatch } from 'react-redux'
import { Marker, Popup } from 'react-leaflet'
import * as L from "leaflet"

import styles from './markersStyle.module.css'

import { deleteItemDataFormAction } from '../../redux/actions/setDataFormAction'

// Recive Json data from props.
const Markers = ({ markers }) => {
    
    const dispatch = useDispatch()

    // Maping Json.
    const setMarkers = markers.map((marker) => {
        
        const handleDeletePopup = () => {
            dispatch(deleteItemDataFormAction({
                id: markers.id
            }))
        }

        return <Marker 
            key={marker.id} // ID.
            position={marker.coords} // Coords. 
            icon={L.icon({
                iconUrl: require(`../../assets/${marker.category}.png`),
                iconSize: [40, 40],
                className: "leaflet-venue-icon"            
            })}> 
            <Popup>
                <div className={styles.contentPopup}>
                    <p> Nombre: {marker.name}</p>
                    <p> Direccion: {marker.address}</p>
                    <p> Telefono:{marker.tel}</p>
                    <p> (x, y): {marker.coords[0]} {marker.coords[1]}</p>
                    <button onClick={handleDeletePopup}> Delete </button>
                </div>
            </Popup>
        </Marker>
    }
    )

    // Return a marker.
    return setMarkers
}

export default Markers
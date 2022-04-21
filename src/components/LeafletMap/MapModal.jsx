import React, { Fragment} from 'react'
import { useDispatch } from 'react-redux'
import { MapContainer, TileLayer } from 'react-leaflet'

import styles from './MapModalStyle.module.css'
import 'leaflet/dist/leaflet.css'
import "./LeafletMapStyle.css"

import { showMapModalAction } from '../../redux/actions/showMapModalAction'

const position = [51.505, -0.09] // Initial coordinates.

const MapModal = () => {

    const dispatch = useDispatch()

    const handleCLoseModal = () => {
        dispatch(showMapModalAction())
    }

    return (
        <Fragment>
            <div className={styles.overlayScreen}>
                <div className={styles.decoreModal}>
                    <MapContainer 
                        center={position} // Coordinates where the map begins.
                        zoom={13} // Map zoom.
                    >
                    <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    /> 
                    </MapContainer>
                </div>
                <div className={styles.closeModal} onClick={handleCLoseModal}>
                    <h1>Close Map</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default MapModal
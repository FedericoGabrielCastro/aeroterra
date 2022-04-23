import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

import styles from './MapModalStyle.module.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useMapEvents } from 'react-leaflet/hooks'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "./LeafletMapStyle.css"

import { showMapModalAction } from '../../redux/actions/showMapModalAction'
import { getLocationForFormAction } from '../../redux/actions/getLocationForFormAction'

const MapModal = () => {

    const dispatch = useDispatch()

    const currentLocation = useSelector(store => store.getCurrentLocationReducer)

    const handleCLoseModal = () => {
        dispatch(showMapModalAction())
    }
    
    const icon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
      });

   
    const MapFun =  () => {
        const map = useMapEvents({
            click: (e) => {
                console.log("mapCenter", e.target.getCenter()); 
                dispatch(showMapModalAction())
                dispatch(getLocationForFormAction({
                        latitude: e.target.getCenter().lat,
                        longitude: e.target.getCenter().lng
                }))
                toast.success("Localizado")
            },
            
        });
        return null
    }

    return (
        <Fragment>
            <div className={styles.overlayScreen}>
                <div className={styles.decoreModal}>
                    <MapContainer 
                        center={currentLocation} // Coordinates where the map begins.
                        zoom={13} // Map zoom.
                        dragging={true}
                        >
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <MapFun />
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
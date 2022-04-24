/**
 *  https://react-leaflet.js.org/docs/example-popup-marker/
 *  See "Examples" to change what tipe of map prefer in TileLayer
 */
import React from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "./LeafletMapStyle.css"

import Markers from '../Markers/Markers'
import JsonData from '../../utils/markers.json'

const LeafletMap = () => {

    const currentLocation = useSelector(store => store.getCurrentLocationReducer)

    const markers = JsonData.markers // Json makers

    return <MapContainer 
        center={currentLocation} // Coordinates where the map begins.
        zoom={13} // Map zoom.
        >
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            /> 
            <Markers markers={markers} />
    </MapContainer>
}

export default LeafletMap
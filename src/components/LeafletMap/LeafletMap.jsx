/**
 *  https://react-leaflet.js.org/docs/example-popup-marker/
 *  See "Examples" to change what tipo of map prefer in TileLayer
 */
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "./LeafletMapStyle.css"

const position = [51.505, -0.09] // Initial coordinates.

const LeafletMap = () => {
    return <MapContainer 
        center={position} // Coordinates where the map begins.
        zoom={13} // Map zoom.
        >
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            /> 
    </MapContainer>
}

export default LeafletMap
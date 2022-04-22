import React from 'react'
import { Marker } from 'react-leaflet'
import * as L from "leaflet"

// Recive Json data from props.
const Markers = ({ markers }) => {

    // Transforms icons to put on Leaflet
    const iconLocation = L.icon({
        iconUrl: require('../../assets/comercio.png'),
        iconRetinaUrl: require('../../assets/comercio.png'),
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [40, 40],
        className: "leaflet-venue-icon"
    })

    // Maping Json.
    const setMarkers = markers.map((marker, index) => (
        <Marker 
            key={index} // ID.
            position={marker.coords} // Coords. 
            icon={iconLocation} /> // Icon on the map.
        )
    )

    // Return a marker.
    return setMarkers
}

export default Markers
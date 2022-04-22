import { GET_CURRENT_LOCATION, GET_CURRENT_LOCATION_ERROR } from "../types"

export const getCurrentLocationAction = ({lat, lng}) => ({
    type: GET_CURRENT_LOCATION,
    lat: lat,
    lng: lng
})

export const getCurrentLocationErrorAction = (error) => ({
    type: GET_CURRENT_LOCATION_ERROR,
    error
})
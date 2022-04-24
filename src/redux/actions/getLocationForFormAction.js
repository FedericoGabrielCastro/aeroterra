import { GET_LOCATION_FOR_FORM } from "../types"

export const getLocationForFormAction = ({ latitude, longitude }) => ({
    type: GET_LOCATION_FOR_FORM,
    latitude: latitude,
    longitude: longitude
})

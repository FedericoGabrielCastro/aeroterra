import { GET_LOCATION_FOR_FORM } from "../types"

const initialState = {
    latitude: "",
    longitude: ""
}

export const getLocationForFormReducer = (state = initialState, { type, longitude, latitude }) => {
    switch (type) {

        case GET_LOCATION_FOR_FORM:
            return { 
                ...state,
                longitude: longitude,
                latitude: latitude
            }

    default:
        return state
    }
}

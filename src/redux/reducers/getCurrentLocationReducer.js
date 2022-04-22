import { GET_CURRENT_LOCATION, GET_CURRENT_LOCATION_ERROR } from "../types"

const initialState = {
    lng: -58.62428697243952,
    lat: -34.68053230097843
}

export const getCurrentLocationReducer = (state = initialState, { type, lat, lng, error }) => {
    switch (type) {

        case GET_CURRENT_LOCATION:
            return {
                ...state,
                lng: lng,
                lat: lat
            }

        case GET_CURRENT_LOCATION_ERROR:
                return { ...state }

    default:
        return state
  }
}

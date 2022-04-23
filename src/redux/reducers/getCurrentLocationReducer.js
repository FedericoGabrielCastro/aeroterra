import { GET_CURRENT_LOCATION, GET_CURRENT_LOCATION_ERROR } from "../types"

const initialState = {
    lat: -34.6468563,
    lng: -58.5886803
}

export const getCurrentLocationReducer = (state = initialState, { type, lat, lng, error }) => {
    switch (type) {

        case GET_CURRENT_LOCATION:
            return {
                lng: lng,
                lat: lat
            }

        case GET_CURRENT_LOCATION_ERROR:
            return { ...state }

    default:
        return state
  }
}

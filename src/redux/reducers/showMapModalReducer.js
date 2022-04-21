import { SHOW_MAP_MODAL } from "../types"

const initialState = false

export const showMapModalReducer = (state = initialState, { type,  }) => {
    switch (type) {

    case SHOW_MAP_MODAL:
        return  !state 

    default:
        return state
    }
}

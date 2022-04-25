import JsonData from '../../utils/markers.json'
import { SET_DATA_FORM, ADD_DATA_FORM, DELETE_ITEM_DATA_FORM } from "../types"

const initialState = JsonData.markers

export const setDataFormReducer =  (state = initialState, { type, name, address, tel, category, coord, id }) => {
    switch (type) {

        case SET_DATA_FORM:
            return [...state] 

        case ADD_DATA_FORM:               
            return state.concat({
                "id": id,
                "name": name,
                "address": address,
                "tel": tel,
                "category": category,
                "coords": coord,
            })
        
        case DELETE_ITEM_DATA_FORM:
            return [
                ...state.filter(element => element.id === {"id": id})
            ]

        default:
            return state
    }
}

import JsonData from '../../utils/markers.json'
import { SET_DATA_FORM, ADD_DATA_FORM } from "../types"

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
        
        default:
            return state
    }
}

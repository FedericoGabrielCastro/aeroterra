import { SET_DATA_FORM, ADD_DATA_FORM } from "../types"

const initialState = []

export const setDataFormReducer =  (state = initialState, { type, name, address, tel, category, coord, id }) => {
    switch (type) {

        case SET_DATA_FORM:
            
            return [...state] 

        case ADD_DATA_FORM:   
            return [
                ...state,
                {
                    id: id,
                    name: name,
                    address: address,
                    tel: tel,
                    category: category,
                    coord: coord,
                }
            ] 

        default:
            return state
    }
}

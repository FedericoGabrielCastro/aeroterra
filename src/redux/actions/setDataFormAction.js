import { SET_DATA_FORM, ADD_DATA_FORM, DELETE_ITEM_DATA_FORM } from "../types"

export const setDataFormAction = () => ({
    type: SET_DATA_FORM,
})

export const addDataFormAction = ({name, address, tel, category, coord, id }) => ({
    type: ADD_DATA_FORM,
    name, 
    address,
    tel,
    category,
    coord,
    id
})

export const deleteItemDataFormAction = ({ id }) => ({
    type: DELETE_ITEM_DATA_FORM,
    id
})

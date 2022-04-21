import { combineReducers } from 'redux'
import { showMapModalReducer } from './showMapModalReducer'

// Compile all reducers to pass to the store.
export const rootReducers = combineReducers({
    showMapModalReducer: showMapModalReducer // Modal visibility.
})
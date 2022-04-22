import { combineReducers } from 'redux'

import { getCurrentLocationReducer } from './getCurrentLocationReducer'
import { showMapModalReducer } from './showMapModalReducer'

// Compile all reducers to pass to the store.
export const rootReducers = combineReducers({
    showMapModalReducer: showMapModalReducer, // Modal visibility.
    getCurrentLocationReducer: getCurrentLocationReducer // Get current location abaut the user.
})
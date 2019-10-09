import { 
    
    FETCH_SEARCH_DATA,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE,
    RESET_SEARCH_DATA,
    DELETE_REGISTER_DATA,
    DELETE_REGISTER_FAILURE

} from "../action-creators"
import { combineReducers } from "redux"

export const initialState = {
    list: [],
    isLoading: false,
    error: {}
}

export const search = ( state=initialState, action ) => {
    switch(action.type) {
        case FETCH_SEARCH_DATA:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SEARCH_SUCCESS:
                console.log(state, action)
            return {        
	            ...state,
                list:   action.payload,
                isLoading: false
            }
        case FETCH_SEARCH_FAILURE:
            return {        
	            ...state,        
                error:     action.error,        
                isLoading: false
            }
        case RESET_SEARCH_DATA:      
            return {
                ...state,
                ...initialState 
            }
		default:
            return state
    }
}

export const remove = ( state=initialState, action ) => {
    switch(action.type) {
        case DELETE_REGISTER_FAILURE:
            return {        
	            ...state,        
                error:     action.error,        
                isLoading: false
            }
		default:
            return state
    }
}

export default combineReducers({
	search,
	remove
})
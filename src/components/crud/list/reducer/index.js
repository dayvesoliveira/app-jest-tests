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

export const search = ( state=initialState, { type, list, error }) => {
    switch(type) {
        case FETCH_SEARCH_DATA:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                list: list,
                isLoading: false
            }
        case FETCH_SEARCH_FAILURE:
            return {        
	            ...state,
                ...error,        
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

export const remove = ( state=initialState, { type, error } ) => {
    switch(type) {
        case FETCH_SEARCH_DATA:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SEARCH_SUCCESS:
                return {
                    ...state,
                    isLoading: false
                }
        case DELETE_REGISTER_FAILURE:
            return {        
	            ...state,        
                ...error,        
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
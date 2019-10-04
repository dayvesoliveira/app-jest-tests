import { 
    
    FETCH_SEARCH_DATA,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE,
    RESET_SEARCH_DATA

} from "../action-creators"

export const initialState = {
    payload: [],
    isLoading: false,
    error: {}
}

const searchReducer = ( state=initialState, action ) => { 
    switch(action.type) {
        case FETCH_SEARCH_DATA:      
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SEARCH_SUCCESS:
            return {        
	            ...state,
                payload:   action.payload,
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

export default searchReducer
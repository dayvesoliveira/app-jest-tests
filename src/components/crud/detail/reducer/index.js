import Redux, { combineReducers } from 'redux'
import { 
    INSERT_UPDATE_POST,
    POST_GET_ERROR,
    POST_GET_SUCCESS,
    POST_ERROR,
    POST_SUCCESS,
    USER_GET,
    USER_GET_SUCCESS,
    USER_GET_ERROR
} from '../action-creators'

export const initialState = {
    value1: '',
    value2: ''
}

export const detail = ( state=initialState, { type, payload }) => {
    switch(type) {
        case INSERT_UPDATE_POST:
            return {
                ...state,
                ...payload
            }
        default: 
            return state
    }
}

export const loading = (state = true, { type }) => {
    switch (type) {
        case INSERT_UPDATE_POST:
        case USER_GET:
            return true
        case POST_GET_ERROR:
        case POST_GET_SUCCESS:
        case POST_ERROR:
        case POST_SUCCESS:
        case USER_GET_SUCCESS:
        case USER_GET_ERROR:
            return false
        default: 
            return state
    }
}

export const error = (state = null, { type, error }) => {
	switch (type) {
		case POST_ERROR:
		case POST_GET_ERROR:
        case USER_GET_ERROR:
			return error
		default:
			return state
	}
};

export default combineReducers({
	detail,
	loading,
	error
})
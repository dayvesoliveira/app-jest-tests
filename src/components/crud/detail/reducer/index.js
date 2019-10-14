import Redux, { combineReducers } from 'redux'
import { 
    INSERT_UPDATE_POST,
    POST_GET_ERROR,
    POST_GET_SUCCESS,
    POST_ERROR,
    POST_SUCCESS
} from '../action-creators'

export const initialState = {
    value1: '',
    value2: ''
}

export const detail = ( state=initialState, { type, model }) => {
    switch(type) {
        case INSERT_UPDATE_POST:
            return {
                ...state,
                ...model
            }
        default: 
            return state
    }
}

export const loading = (state = true, { type }) => {
    switch (type) {
        case INSERT_UPDATE_POST:
            return true
        case POST_GET_ERROR:
        case POST_GET_SUCCESS:
        case POST_ERROR:
        case POST_SUCCESS:
            return false
        default: 
            return state
    }
}

export const error = (state = null, { type, message }) => {
	switch (type) {
		case POST_ERROR:
		case POST_GET_ERROR:
			return message
		default:
			return state
	}
};

export default combineReducers({
	detail,
	loading,
	error
})
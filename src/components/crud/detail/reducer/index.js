import { combineReducers } from 'redux'
import { 
    USER_LIST_FILTER,
    USER_LIST_SUCCESS,
    USER_LIST_FAILURE,
    USER_LIST_RESET,
    USER_GET,
    USER_GET_SUCCESS,
    USER_GET_ERROR,
    POST_NEW_ITEM,
    POST_GET_ID,
    POST_GET_ID_SUCCESS,
    POST_GET_ID_FAILURE,
    POST_SAVE,
    POST_SAVE_SUCCESS,
    POST_SAVE_ERROR
} from '../action-creators'

export const initialState = {
    userId: '',
    id:     '',
    title:  '',
    body:   ''
}

export const save = ( state=initialState, { type, payload }) => {
    switch(type) {
        case POST_SAVE:
            return payload
        default: 
            return state
    }
}

export const detail = ( state=initialState, { type, payload }) => {
    switch(type) {
        case POST_NEW_ITEM:
        case POST_GET_ID:
            return payload
        default: 
            return state
    }
}

export const loading = (state = true, { type }) => {
    switch (type) {
        case POST_SAVE:
        case USER_GET:
        case POST_GET_ID:
            return true
        case USER_LIST_SUCCESS:
        case USER_LIST_FAILURE:
        case USER_GET_SUCCESS:
        case USER_GET_ERROR:
        case POST_GET_ID_SUCCESS:
        case POST_GET_ID_FAILURE:
        case POST_SAVE_SUCCESS:
        case POST_SAVE_ERROR:
            return false
        default: 
            return state
    }
}

export const error = (state = null, { type, error }) => {
	switch (type) {
        case POST_GET_ID_FAILURE:
        case USER_LIST_FAILURE:
        case USER_GET_ERROR:
        case POST_SAVE_ERROR:
			return error
		default:
			return state
	}
};

export default combineReducers({
    detail,
    save,
	loading,
	error
})
import { combineReducers } from 'redux'
import { 
    USER_GET,
    USER_GET_ERROR,
    POST_NEW_ITEM,
    POST_GET_ID,
    POST_GET_ID_FAILURE,
    POST_SAVE_UPDATE,
    POST_SAVE,
    POST_SAVE_ERROR,
    USER_LIST_FILTER,
    USER_LIST_GET,
    USER_LIST_GET_FAILURE
} from '../action-creators'

export const initialState = {
    userId: null,
    id:     null,
    title:  '',
    body:   ''
}

export const detail = ( state=initialState, { type, payload }) => {
    switch(type) {
        case POST_NEW_ITEM:
            return {
                ...state
            }
        case POST_GET_ID:
        case POST_SAVE_UPDATE:
            return payload
        default: 
            return state
    }
}

export const users = (state=[], { type, payload }) => {
    switch(type){
        case USER_LIST_FILTER:
            return payload
        default:
            return state
    }
}

export const loading = (state = true, { type }) => {
    switch (type) {
        case POST_SAVE:
        case USER_LIST_GET:
            return true
        case USER_LIST_FILTER:
        case POST_SAVE_UPDATE:
        case POST_SAVE_ERROR:
        case USER_GET_ERROR:
        case POST_GET_ID_FAILURE:
        case USER_LIST_GET_FAILURE:
            return false
        default:
            return state
    }
}

export const error = (state = null, { type, error }) => {
	switch (type) {
        case POST_SAVE_ERROR:
        case USER_GET_ERROR:
        case POST_GET_ID_FAILURE:
        case USER_LIST_GET_FAILURE:
			return error
		default:
			return state
	}
};

export default combineReducers({
    detail,
    users,
	loading,
	error
})
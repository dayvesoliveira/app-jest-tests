import { combineReducers } from "redux"
import { PostsTypeActions as caPosts } from "../create-actions"

const initialState = {
    list: [],
    isFetching: false,
    complete: true,
    status: 0
}

// definir aqui os reducers

const posts = ( state = initialState, {type, payload} ) => {
    switch (type){
        case caPosts.POSTS_SET_ALL:
            return payload

        case caPosts.POSTS_GET_ALL:
            return {
                ...state,
                list: [],
                isFetching: true,
                complete: false,
                status: 0
            }
        case caPosts.POSTS_GET_ALL_SUCCESS:
        return {

        }
        case caPosts.POSTS_GET_ALL_ERROR:
    }
}

const reducer = combineReducers({  })

export default reducer
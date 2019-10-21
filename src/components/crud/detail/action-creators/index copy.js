import api from '../../../../config/api'

export const FETCH_SEARCH_ID            = "FETCH_SEARCH_ID_DATA"
export const FETCH_SEARCH_ID_SUCCESS    = "FETCH_SEARCH_ID_SUCCESS"
export const FETCH_SEARCH_ID_FAILURE    = "FETCH_SEARCH_ID_FAILURE"

export const INSERT_UPDATE_POST         = "INSERT_UPDATE_POST"

export const POST_GET_ERROR             = "POST_GET_ERROR"
export const POST_GET_SUCCESS           = "POST_GET_SUCCESS"

export const POST_ERROR                 = "POST_ERROR"
export const POST_SUCCESS               = "POST_SUCCESS"

export const USER_LIST_FILTER           = "USER_LIST_FILTER"
export const USER_LIST_RESET            = "USER_LIST_RESET"

export const USER_GET                   = "USER_GET"
export const USER_GET_SUCCESS           = "USER_GET_SUCCESS"
export const USER_GET_ERROR             = "USER_GET_ERROR"

export const changeFilterUsers = payload => dispatch => {
    if (payload) 
        dispatch(filterUsers(payload))
    else 
        dispatch(resetFilterUsers())
}

export const filterUsers = payload => ({
    type: USER_LIST_FILTER,
    payload
})

export const resetFilterUsers = () => ({
    type: USER_LIST_RESET
})

export const fetchUsersList = () => async dispatch => {
    dispatch(loadingUsers())
    try {
        const users = await api.get('/users')
        dispatch(filterUsers(users))
        dispatch(removeLoadingUsers())
    } catch(e) {
        dispatch(errorFetchUsersList(e && e.message || 'Error!'))
    }
}

export const errorFetchUsersList = err => ({
    type: USER_GET_ERROR,
    message: err
})

export const loadingUsers = () => ({
    type: USER_GET
})

export const removeLoadingUsers = () => ({
    type: USER_GET_SUCCESS
})

export const setModel = payload => ({
    type: POST_SUCCESS,
    payload
})

export const changeModelValue = (fieldName, value) =>({
    type: INSERT_UPDATE_POST,
    [fieldName]: value
})

export const fetchPost = id => async dispatch => {
    dispatch(loadingPost())
    try {
        const post = await api.get(`/posts/${id}`)
        dispatch(setModel(post))
        dispatch(removeLoadingPost())
    } catch(e) {
        dispatch(errorFetchSubmitPost(e && e.message || 'Error!'))
    }
}

export const fetchSubmitPost = () => async dispatch => {
    dispatch(loadingPost())
    try {
        const model = await api.post('/posts')
        dispatch(setModel(model))
        dispatch(removeLoadingPost())
    } catch(e) {
        dispatch(errorFetchSubmitPost(e && e.message || 'Error!'))
    }
}

export const errorFetchSubmitPost = err => ({
    type: POST_ERROR,
    error: err
})

export const loadingPost = () => ({
    type: INSERT_UPDATE_POST
})

export const removeLoadingPost = () => ({
    type: POST_SUCCESS
})

/**
 * 
 * funcionamento de um hoock
 * 
    let count_       = 1;
    let setCount_    = () => 'teste';
    let __useState__ = (v) => [[count_, setCount_ ]][v];

    let [count, setCount] = __useState__(0);

    console.log(count, setCount());

 * 
 */
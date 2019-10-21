import api from '../../../../config/api'

export const USER_GET               = "USER_GET"
export const USER_GET_SUCCESS       = "USER_GET_SUCCESS"
export const USER_GET_ERROR         = "USER_GET_ERROR"

export const POST_NEW_ITEM          = "POST_NEW_ITEM"
export const POST_GET_ID            = "POST_GET_ID"
export const POST_GET_ID_SUCCESS    = "POST_GET_ID_SUCCESS"
export const POST_GET_ID_FAILURE    = "POST_GET_ID_FAILURE"

export const POST_SAVE              = "POST_SAVE"
export const POST_SAVE_SUCCESS      = "POST_SAVE_SUCCESS"
export const POST_SAVE_ERROR        = "POST_SAVE_ERROR"

export const USER_LIST_GET          = "USER_LIST_GET"
export const USER_LIST_GET_SUCCESS  = "USER_LIST_GET_SUCCESS"
export const USER_LIST_GET_FAILURE  = "USER_LIST_GET_FAILURE"
export const USER_LIST_FILTER       = "USER_LIST_FILTER"
export const USER_LIST_RESET        = "USER_LIST_RESET"


export const fetchUsersList = () => async dispatch => {
    dispatch(startLoadingUsers())
    try {
        const users = await api.get('/users')
        dispatch(filterUsers(users))
        dispatch(stopLoadingUsers())
    } catch(e) {
        dispatch(errorFetchUsersList(e && e.message || 'Error!'))
    }
}

export const startLoadingUsers = () => ({
    type: USER_LIST_GET
})

export const stopLoadingUsers = () => ({
    type: USER_LIST_GET_SUCCESS
})

export const errorFetchUsersList = err => ({
    type: USER_LIST_GET_FAILURE,
    message: err
})


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
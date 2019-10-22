import api from '../../../../config/api'

export const USER_GET               = "USER_GET"
export const USER_GET_ERROR         = "USER_GET_ERROR"

export const POST_NEW_ITEM          = "POST_NEW_ITEM"
export const POST_GET_ID            = "POST_GET_ID"
export const POST_GET_ID_FAILURE    = "POST_GET_ID_FAILURE"

export const POST_SAVE_UPDATE       = "POST_SAVE_UPDATE"
export const POST_SAVE              = "POST_SAVE"
export const POST_SAVE_ERROR        = "POST_SAVE_ERROR"

export const USER_LIST_GET          = "USER_LIST_GET"
export const USER_LIST_GET_FAILURE  = "USER_LIST_GET_FAILURE"
export const USER_LIST_FILTER       = "USER_LIST_FILTER"
export const USER_LIST_RESET        = "USER_LIST_RESET"


export const fetchUsersList = () => async dispatch => {
    dispatch(startLoadingUsers())
    try {
        const users = await api.get('/users')
        dispatch(filterUsers(users))
    } catch(e) {
        dispatch(errorFetchUsersList(e && e.message || 'Error!'))
    }
}

export const startLoadingUsers = () => ({
    type: USER_LIST_GET
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
    type: POST_SAVE_UPDATE,
    payload
})

export const changeModelValue = (fieldName, value) =>({
    type: POST_NEW_ITEM,
    [fieldName]: value
})

export const fetchPost = id => async dispatch => {
    dispatch(startLoadingPost())
    try {
        const response = await api.get(`/posts/${id}`)
        const { data } = response
        dispatch(setModel(data))
    } catch(e) {
        dispatch(errorFetchPost(e && e.message || 'Error!'))
    }
}

export const errorFetchPost = err => ({
    type: POST_GET_ID_FAILURE,
    message: err
})

export const fetchSubmitPost = () => async dispatch => {
    dispatch(startLoadingPost())
    try {
        const response = await api.post('/posts')
        const { data } = response
        dispatch(setModel(data))
    } catch(e) {
        dispatch(errorFetchSubmitPost(e && e.message || 'Error!'))
    }
}

export const startLoadingPost = () => ({
    type: POST_SAVE
})

export const errorFetchSubmitPost = err => ({
    type: POST_SAVE_ERROR,
    error: err
})


/**
 * 
 * funcionamento de um hook
 * 
    let count_       = 1;
    let setCount_    = () => 'teste';
    let __useState__ = (v) => [[count_, setCount_ ]][v];

    let [count, setCount] = __useState__(0);

    console.log(count, setCount());

 * 
 */
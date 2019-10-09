import api from '../../../../config/api'

// definir aqui as actions

export const FETCH_SEARCH_DATA     = "FETCH_SEARCH_DATA"
export const FETCH_SEARCH_SUCCESS  = "FETCH_SEARCH_SUCCESS"
export const FETCH_SEARCH_FAILURE  = "FETCH_SEARCH_FAILURE"
export const RESET_SEARCH_DATA     = "RESET_SEARCH_DATA"

export const DELETE_REGISTER_DATA     = "DELETE_REGISTER_DATA"
export const DELETE_REGISTER_FAILURE  = "DELETE_REGISTER_FAILURE"

const END_POINT = '/posts'

export const loadSearchPosts = () => ({
   type: FETCH_SEARCH_DATA
})

export const setSearchPosts = list => ({
   type: FETCH_SEARCH_SUCCESS,
   list
})

export const errorResponsePosts = () => ({
   type: FETCH_SEARCH_FAILURE,
})

export const fetchSearchPosts = () => async dispatch =>{
    dispatch(loadSearchPosts())
    try {
        const response = await api.get(END_POINT)
        dispatch(setSearchPosts(response.data))
    } catch(e){
        dispatch(errorResponsePosts())
    }
}

export const resetPosts = () => ({
    type: RESET_SEARCH_DATA
})

export const errorDeletePost = () => ({
    type: DELETE_REGISTER_FAILURE
})

export const deletePost = id => async dispatch => {
	try {
		if (id) {
			dispatch(loadSearchPosts())

			await api.delete(`${END_POINT}/${id}`)

			dispatch(fetchSearchPosts())
		}
	} catch (er) {
		dispatch(errorDeletePost())
	}
}
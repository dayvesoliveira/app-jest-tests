import api from '../../../../config/api'

// definir aqui as actions

export const FETCH_SEARCH_DATA     = "FETCH_SEARCH_DATA"
export const FETCH_SEARCH_SUCCESS  = "FETCH_SEARCH_SUCCESS"
export const FETCH_SEARCH_FAILURE  = "FETCH_SEARCH_FAILURE"
export const RESET_SEARCH_DATA     = "RESET_SEARCH_DATA"

const END_POINT = '/posts'

const loadSearchPosts = () => ({
   type: FETCH_SEARCH_DATA
})

export const setPosts = payload => ({
   type: FETCH_SEARCH_SUCCESS,
   payload
})

export const errorResponsePosts = () => ({
   type: FETCH_SEARCH_FAILURE
})

export const fetchSearchPosts = () => async dispatch =>{
    dispatch(loadSearchPosts())
    try {
        const response = await api.get(END_POINT)
        dispatch(setPosts( response ))

        // dispatch(
        //    setPosts(await api.get(END_POINT))
        // )

    } catch(e){
        console.log('Error: '+ e)
        dispatch(errorResponsePosts(e))
    }
}

export const resetPosts = () => ({
    type: RESET_SEARCH_DATA
})
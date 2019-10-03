import api from '../../../../config/api'

// definir aqui as actions
const POSTS_GET_ALL         = "POSTS_GET_ALL"
const POSTS_GET_ALL_SUCCESS = "POSTS_GET_ALL_SUCCESS"
const POSTS_GET_ALL_ERROR   = "POSTS_GET_ALL_ERROR"

export const PostsTypeActions = {
    POSTS_GET_ALL,
    POSTS_GET_ALL_SUCCESS,
    POSTS_GET_ALL_ERROR
}

const END_POINT = '/posts'


const getAllPosts = () => ({type: POSTS_GET_ALL })

const setAllPosts = payload => dispatch => ({
    type: POSTS_GET_ALL_SUCCESS,
    payload
})

const errorAllPosts = () => ({type: POSTS_GET_ALL_ERROR })

const fetchAllPosts = () => async dispatch =>{
    dispatch(getAllPosts())
    try {
        const response = await api.get(END_POINT)

        setAllPosts(response)

    } catch(e){
        dispatch(errorAllPosts())
    }
}


export default { 
    fetchAllPosts,
    setAllPosts
}
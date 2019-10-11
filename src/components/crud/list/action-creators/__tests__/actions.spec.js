import {
    loadSearchPosts,
    fetchSearchPosts,
    setSearchPosts,
    resetPosts,
    errorResponsePosts,
    deletePost,
    errorDeletePost
} from '../index'

import { MOCK_POSTS } from '../../../../../config/tests/__mocks__/posts.mock'
import api from '../../../../../config/api'

const listPostsMock = MOCK_POSTS
const POST_MOCK = listPostsMock[0]

const dispatch = jest.fn()

afterEach(() => {
	dispatch.mockClear()
	dispatch.mockReset()
})

describe('#actions creator',()=>{

    describe('loadSearchPosts',() => {
        it('should start loading posts',()=>{
            expect(loadSearchPosts()).toEqual({"type": "FETCH_SEARCH_DATA"})
        })
    })

    describe('errorResponsePosts',() => {
        it('should response error posts',()=>{
            expect(errorResponsePosts()).toEqual({"type": "FETCH_SEARCH_FAILURE"})
        })
    })

    describe('setSearchPosts',() => {
        it('should response error posts',()=>{
            const mockAction = {
                "type": "FETCH_SEARCH_SUCCESS",
                list: POST_MOCK
            }

            expect(setSearchPosts(POST_MOCK)).toEqual(mockAction)
        })
    })

    describe('fetchSearchPosts',() => {
        it('should request fetch search posts',async ()=>{

            await fetchSearchPosts()(dispatch)

            expect(dispatch).toHaveBeenCalledWith(
                {"type": "FETCH_SEARCH_DATA"}
            )
        })

        it('should request fetch search posts',async ()=>{

            spyOn(api, 'get').and.returnValue(Promise.reject('Error Mocking'));

            await fetchSearchPosts()(dispatch)

            expect(dispatch).toHaveBeenCalledWith(
                {"type": "FETCH_SEARCH_FAILURE"}
            )
        })
    })

    describe('resetPosts',() => {
        it('should reset posts',()=>{
            expect(resetPosts()).toEqual({"type": "RESET_SEARCH_DATA"})
        })
    })

    describe('errorDeletePost',() => {
        it('should response error delete posts',()=>{
            expect(errorDeletePost()).toEqual({"type": "DELETE_REGISTER_FAILURE"})
        })
    })

    describe('deletePost',() => {
        
        const ID_MOCK = '1111'

        it('should request delete post',async ()=>{
            

            await deletePost(ID_MOCK)(dispatch)

            expect(dispatch).toHaveBeenCalledWith(
                {"type": "FETCH_SEARCH_DATA"}
            )
        })

        it('should request delete search posts',async ()=>{

            spyOn(api, 'delete').and.returnValue(Promise.reject('Error Mocking'));

            await deletePost(ID_MOCK)(dispatch)

            expect(dispatch).toHaveBeenCalledWith(
                {"type": "DELETE_REGISTER_FAILURE"}
            )
        })
    })

})
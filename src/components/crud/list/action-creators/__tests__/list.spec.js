import {
    loadSearchPosts,
    fetchSearchPosts,
    setPosts,
    resetPosts,
    errorResponsePosts
} from '../index'

import { MOCK_POSTS } from '../../../../../config/tests/__mocks__/posts.mock';

const listPostsMock = MOCK_POSTS
const POST_MOCK = listPostsMock[0]

const dispatch = jest.fn();

describe('#actions creator',()=>{

    // describe('loadSearchPosts',()=>{
    //     it('should return the initial state by default', ()=>{
    //         expect(posts([],{})).toMatchSnapshot()
    //     })
    // })

    // describe('setPosts',()=>{
        
    // })

    // describe('errorResponsePosts',()=>{
        
    // })

    describe('fetchSearchPosts',() => {
        it('should request fetch search posts',async ()=>{

            await fetchSearchPosts()(dispatch)

            expect(dispatch).toHaveBeenCalledWith(
                
                //    {"type": "FETCH_SEARCH_DATA"},
                    {"type": "FETCH_SEARCH_FAILURE"}
                
            )
        })
    })
})
import { 
    FETCH_SEARCH_DATA,
    FETCH_SEARCH_SUCCESS, 
    FETCH_SEARCH_FAILURE,
    RESET_SEARCH_DATA
} from "../../action-creators"

import posts, { initialState } from '../index'
import { MOCK_POSTS } from '../../../../../config/tests/__mocks__/posts.mock'

const listPostsMock = MOCK_POSTS
const POST_MOCK = listPostsMock[0]

describe('#Posts reducers',()=>{

    describe('posts', ()=>{

        it('should return the initial state by default', ()=>{
            expect(posts([],{})).toMatchSnapshot()
        })

        it('should return the `FETCH_SEARCH_DATA` state', ()=>{
            expect(posts({},{type: FETCH_SEARCH_DATA })).toMatchSnapshot()
        })

        it('should return the `FETCH_SEARCH_SUCCESS` state', ()=>{

            const actionMock = {
                type: FETCH_SEARCH_SUCCESS,
                payload: MOCK_POSTS
            }

            expect(posts([],actionMock)).toEqual({
                payload: MOCK_POSTS,
                isLoading: false
            })
        })

        it('should return the `FETCH_SEARCH_FAILURE` state', ()=>{            
            expect(posts([],{type: FETCH_SEARCH_FAILURE})).toMatchSnapshot()
        })

        it('should return the `RESET_SEARCH_DATA` state', ()=>{
           expect(posts(initialState,{type: RESET_SEARCH_DATA})).toMatchSnapshot()
        })
    })

})
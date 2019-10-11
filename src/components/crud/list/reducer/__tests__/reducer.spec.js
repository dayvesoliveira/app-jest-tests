import { 
    FETCH_SEARCH_DATA,
    FETCH_SEARCH_SUCCESS, 
    FETCH_SEARCH_FAILURE,
    RESET_SEARCH_DATA,
    DELETE_REGISTER_DATA,
    DELETE_REGISTER_FAILURE
} from "../../action-creators"

import { search, remove, initialState } from '../index'
import { MOCK_POSTS } from '../../../../../config/tests/__mocks__/posts.mock'

const listPostsMock = MOCK_POSTS
const POST_MOCK = listPostsMock[0]

describe('#Posts reducers',()=>{

    describe('search', ()=>{

        it('should return the initial state by default', ()=>{
            expect(search([],{})).toMatchSnapshot()
        })

        it('should return the `FETCH_SEARCH_DATA` state', ()=>{
            expect(search({},{type: FETCH_SEARCH_DATA })).toMatchSnapshot()
        })

        it('should return the `FETCH_SEARCH_SUCCESS` state', ()=>{

            const actionMock = {
                type: FETCH_SEARCH_SUCCESS,
                list: MOCK_POSTS
            }

            expect(search([],actionMock)).toEqual({
                list: MOCK_POSTS,
                isLoading: false
            })
        })

        it('should return the `FETCH_SEARCH_FAILURE` state', ()=>{            
            expect(search([],{type: FETCH_SEARCH_FAILURE})).toMatchSnapshot()
        })

        it('should return the `RESET_SEARCH_DATA` state', ()=>{
           expect(search(initialState,{type: RESET_SEARCH_DATA})).toMatchSnapshot()
        })
    })

    describe('delete', ()=>{
        
        it('should return the `FETCH_SEARCH_DATA` state', ()=>{
            expect(remove(undefined,{type: FETCH_SEARCH_DATA })).toMatchSnapshot()
        })

        it('should return the `FETCH_SEARCH_SUCCESS` state', ()=>{
            expect(remove(undefined,{type: FETCH_SEARCH_SUCCESS })).toMatchSnapshot()
        })

        it('should return the `DELETE_REGISTER_DATA` state', ()=>{
            expect(remove({},{type: DELETE_REGISTER_DATA })).toMatchSnapshot()
        })

        it('should return the `DELETE_REGISTER_FAILURE` state', ()=>{            
            expect(remove([],{type: DELETE_REGISTER_FAILURE})).toMatchSnapshot()
        })
    })

})
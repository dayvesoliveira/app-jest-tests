import React from 'react'
import { mount, shallow, render } from 'enzyme'
import axios from 'axios'

jest.mock('axios')

import { 
    changeFilterUsers,
    fetchSubmitPost,
    errorFetchSubmitPost,
    loadingPost,
    removeLoadingPost,
    INSERT_UPDATE_POST,
    POST_GET_SUCCESS,
    POST_GET_ERROR
} from '..'

import api from '../../../../../config/api'

const dispatch = jest.fn();

afterEach(() => {
	dispatch.mockClear();
	dispatch.mockReset();
});

describe('#actions', ()=>{

    describe('#Posts', ()=>{

        it('changeModelValue', ()=>{
            
        })

        it('fetchSubmitPost', async ()=>{
            const mockResponse = {
                data: {}
            }
            
            axios.get.mockResponseValue(Promise.resolve(mockResponse))

            await fetchUsersList()(dispach)

            expect(dispatch).toHaveBeeanCalledWith(
                loadingUsers({type: INSERT_UPDATE_POST})
            )

            expect(dispatch).toHaveBeeanCalledWith(
                filterUsers({type: POST_GET_SUCCESS})
            )
        })

        it('errorFetchSubmitPost', ()=>{
    
        })

        it('loadingPost', ()=>{
    
        })

        it('removeLoadingPost', ()=>{
    
        })
    })

    describe('#Users', ()=>{

        it('changeFilterUsers', ()=>{
    
        })

        it('filterUsers', ()=>{
    
        })

        it('resetFilterUsers', ()=>{
    
        })

        it('fetchUsersList', ()=>{
    
        })
    })


})
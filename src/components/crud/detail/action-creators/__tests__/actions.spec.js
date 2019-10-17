import React from 'react'
import { mount, shallow, render } from 'enzyme'
import axios from 'axios'

import {
    fetchUsersList,
    resetFilterUsers,
    loadingUsers,
    removeLoadingUsers,
    filterUsers,
    changeFilterUsers,
    fetchSubmitPost,
    errorFetchSubmitPost,
    loadingPost,
    removeLoadingPost,
    changeModelValue,
    setModel,
    INSERT_UPDATE_POST,
    USER_GET,
    POST_SUCCESS,
    USER_GET_SUCCESS,
    POST_ERROR,
    USER_LIST_FILTER,
    USER_LIST_RESET
} from '..'

import api from '../../../../../config/api'

jest.mock('../../../../../config/api')

const dispatch = jest.fn()

afterEach(() => {
	dispatch.mockClear()
    dispatch.mockReset()
});

describe('#actions', ()=>{

    describe('#Posts', ()=>{

        it('changeModelValue', ()=>{
            const fieldName = "value1",
                  value     = "teste"
            expect(changeModelValue(fieldName, value)).toEqual({
                type: INSERT_UPDATE_POST,
                value1: "teste",
            })
        })

        it('fetchSubmitPost', async ()=>{
            const mockResponse = {
                data: {
                    test: {}
                }
            }
            api.get.mockReturnValue(Promise.resolve(mockResponse))
            await fetchSubmitPost()(dispatch)
            expect(dispatch).toHaveBeenCalledWith(
                setModel(mockResponse)
            )
        })

        it('errorFetchSubmitPost', ()=>{
            const e = {message: "error"}
            expect(errorFetchSubmitPost(e)).toEqual({
                type:  POST_ERROR,
                error: e
            })
        })

        it('loadingPost', ()=>{
            expect(loadingPost()).toEqual({
                type: INSERT_UPDATE_POST
            })
        })

        it('removeLoadingPost', ()=>{
            expect(removeLoadingPost()).toEqual({
                type: POST_SUCCESS
            })
        })
    })

    describe('#Users', ()=>{

        it('#changeFilterUsers, esperando a chamada filterUsers', ()=>{
            const payload = { value1: "teste" }
            changeFilterUsers(payload)(dispatch)
            expect(dispatch).toHaveBeenCalledWith(
                filterUsers(payload)
            )
        })

        it('#changeFilterUsers, esperando a chamada resetFilterUsers', ()=>{
            const payload = undefined
            changeFilterUsers(payload)(dispatch)
            expect(dispatch).toHaveBeenCalledWith(
                resetFilterUsers(payload)
            )
        })

        it('executando o teste de retorno de filterUsers', ()=>{
            const payload = {}
            expect(filterUsers(payload)).toEqual({
                type: USER_LIST_FILTER,
                payload
            })
        })

        it('resetFilterUsers', ()=>{
            expect(resetFilterUsers()).toEqual({
                type: USER_LIST_RESET
            })
        })

        it('fetchUsersList', async ()=>{
            /*const mockResponse = {
                data: {}
            }
            
            api.get.mockReturnValue(Promise.resolve(mockResponse))

            await fetchUsersList()(dispatch)

            expect(dispatch).toHaveBeenCalledWith(
                loadingUsers({type: INSERT_UPDATE_POST})
            )

            expect(dispatch).toHaveBeenCalledWith(
                filterUsers({type: POST_GET_SUCCESS})
            )*/
        })

        it('loadingUsers', ()=>{
            expect(loadingUsers()).toEqual({
                type: USER_GET
            })
        })

        it('removeLoadingUsers', ()=>{
            expect(removeLoadingUsers()).toEqual({
                type: USER_GET_SUCCESS
            })
        })
    })


})
import React from 'react'
import { mount, shallow, render } from 'enzyme'
import axios from 'axios'

import {
    USER_GET,
    USER_GET_ERROR,
    POST_NEW_ITEM,
    POST_GET_ID,
    POST_GET_ID_FAILURE,
    POST_SAVE,
    POST_SAVE_ERROR,
    USER_LIST_GET,
    USER_LIST_GET_FAILURE,
    USER_LIST_FILTER,
    USER_LIST_RESET,

    fetchUsersList,
    startLoadingUsers,
    filterUsers,
    errorFetchUsersList,
    changeFilterUsers,
    resetFilterUsers,
    setModel,
    changeModelValue,
    fetchPost,
    startLoadingPost,
    errorFetchSubmitPost,
    fetchSubmitPost,
    errorFetchPost
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

        const ID_VAR = 111
        const data = {
            userId: 1,
            id:     1,
            title:  '',
            body:   ''
        }
        const mockResponse = { data }

        it('changeModelValue', ()=>{
            const fieldName = "value1",
                  value     = "teste"
            expect(changeModelValue(fieldName, value)).toEqual({
                type: POST_NEW_ITEM,
                value1: "teste",
            })
        })

        it('errorFetchSubmitPost', ()=>{
            const e = {message: "error"}
            expect(errorFetchSubmitPost(e)).toEqual({
                type:  POST_SAVE_ERROR,
                error: e
            })
        })

        it('startLoadingPost', ()=>{
            expect(startLoadingPost()).toEqual({
                type: POST_SAVE
            })
        })

        describe('Post#fetchSubmitPost', ()=>{

            it('testa se a funcao setModel foi executada', async ()=>{
                api.post.mockReturnValue(Promise.resolve(mockResponse))
                await fetchSubmitPost()(dispatch)
                expect(dispatch).toHaveBeenCalledWith( setModel(data) )
            })
    
            it('errorFetchSubmitPost', async ()=>{
                const err = {"message": "[Error: Error!]"}
                api.post.mockReturnValue(Promise.reject(err))
                await fetchSubmitPost()(dispatch)
                expect(dispatch).toHaveBeenCalledWith( errorFetchSubmitPost(err.message) )
            })

        })

        describe('#fetchPost', ()=>{
            it('startLoadingPost', async ()=>{
                api.get.mockReturnValue(Promise.resolve(mockResponse))
                await fetchPost(ID_VAR)(dispatch)
                expect(dispatch).toHaveBeenCalledWith( startLoadingPost() )
            })

            it('setModel', async ()=>{
                api.get.mockReturnValue(Promise.resolve(mockResponse))
                await fetchPost(ID_VAR)(dispatch)
                expect(dispatch).toHaveBeenCalledWith( setModel(data) )
            })

            it('errorFetchPost', async ()=>{
                const err = {"message": "[Error: Error!]"}
                api.get.mockReturnValue(Promise.reject(err))
                await fetchPost(ID_VAR)(dispatch)
                expect(dispatch).toHaveBeenCalledWith( errorFetchPost(err.message) )
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

        it('executando o teste de retorno da funcao resetFilterUsers', ()=>{
            expect(resetFilterUsers()).toEqual({
                type: USER_LIST_RESET
            })
        })

        it('startLoadingUsers', ()=>{
            expect(startLoadingUsers()).toEqual({
                type: USER_LIST_GET
            })
        })

        describe('#fetchUsersList',()=>{

            it('startLoadingUsers', async ()=>{
                api.get.mockReturnValue(Promise.resolve({data:{}}))
                await fetchUsersList()(dispatch)
                expect(dispatch).toHaveBeenCalledWith(startLoadingUsers())
            })

            it('fetchUsersList', async ()=>{
                const mockResponse = {
                    data: {
                        test: {}
                    }
                }
                api.get.mockReturnValue(Promise.resolve(mockResponse))
                await fetchUsersList()(dispatch)
                expect(dispatch).toHaveBeenCalledWith(
                    filterUsers(mockResponse)
                )
            })

            it('errorFetchUsersList', async ()=>{
                const err = {"message": "[Error: Error!]"}
                api.get.mockReturnValue(Promise.reject(err))
                await fetchUsersList()(dispatch)
                expect(dispatch).toHaveBeenCalledWith(
                    errorFetchUsersList(err.message)
                )
            })
        })

    })


})
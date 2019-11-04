import { initialState, detail, loading, error } from '../index'
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
    POST_SAVE_UPDATE

 } from '../../action-creators'

describe('detail reducer', ()=>{

    describe('#detail', ()=>{
        it('should return the initial state by default', ()=>{
            expect(detail({},{})).toMatchSnapshot()
        })
    
        it('should return the `POST_NEW_ITEM` set input value', ()=>{
            expect(detail({},{type: POST_NEW_ITEM, "value1": 222 })).toMatchSnapshot()
        })
    
        it('should return the `POST_SAVE` state', ()=>{
            expect(detail({},{type: POST_SAVE })).toMatchSnapshot()
        })
    })

    describe('#loading', ()=>{
        it('should return the initial state by default', ()=>{
            expect(loading(initialState,{})).toMatchSnapshot()
        })
                
        it.each([
            [true,  POST_SAVE],
            [true,  USER_GET],
            [true,  USER_LIST_GET],
            [false, POST_SAVE_UPDATE],
            [false, USER_GET_ERROR],
            [false, POST_SAVE_ERROR],
            [false, USER_LIST_GET_FAILURE],
            [false, POST_GET_ID_FAILURE],
        ])
        ('should return the `%s` set %p input value', (expected, type)=>{
            expect(loading(undefined, {type})).toBe(expected)
        })
    })

    describe('#error', ()=>{
        it('should return the initial state by default', ()=>{
            expect(error({},{})).toMatchSnapshot()
        })
                
        it.each([
            [USER_GET_ERROR, { message: 'USER_GET_ERROR--Messages'}],
            [POST_SAVE_ERROR, { message: 'POST_SAVE_ERROR--Messages'}],
            [POST_SAVE_ERROR, { message: 'POST_SAVE_ERROR--Messages'}],
            [USER_LIST_GET_FAILURE, { message: 'USER_LIST_GET_FAILURE--Messages'}],
            [POST_GET_ID_FAILURE, { message: 'POST_GET_ID_FAILURE--Messages'}],
            [USER_GET_ERROR, {message: 'USER_GET_ERROR--Messages'}]
        ])
        ('should return the `%p` set %s input value', (type, err)=>{
            expect(error(null, { type, error: err })).toMatchSnapshot()
            expect(error(undefined, { type, error: err })).toBe(err)
        })
    })
})
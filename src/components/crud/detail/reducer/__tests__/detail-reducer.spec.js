import { initialState, detail, loading, error } from '../index'
import {
    INSERT_UPDATE_POST,
    POST_GET_ERROR,
    POST_GET_SUCCESS,
    POST_ERROR,
    POST_SUCCESS
 } from '../../action-creators'

describe('detail reducer', ()=>{

    describe('#detail', ()=>{
        it('should return the initial state by default', ()=>{
            expect(detail({},{})).toMatchSnapshot()
        })
    
        it('should return the `INSERT_UPDATE_POST` set input value', ()=>{
            expect(detail({},{type: INSERT_UPDATE_POST, "value1": 222 })).toMatchSnapshot()
        })
    
        it('should return the `INSERT_UPDATE_POST` state', ()=>{
            expect(detail({},{type: INSERT_UPDATE_POST })).toMatchSnapshot()
        })
    })

    describe('#loading', ()=>{
        it('should return the initial state by default', ()=>{
            expect(loading(initialState,{})).toMatchSnapshot()
        })
                
        it.each([
            [true,  INSERT_UPDATE_POST],
            [false, POST_GET_ERROR],
            [false, POST_GET_SUCCESS],
            [false, POST_ERROR],
            [false, POST_SUCCESS],
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
            [POST_GET_ERROR, 'POST_GET_ERROR--Messages'],
            [POST_ERROR, 'POST_ERROR--Messages']
        ])
        ('should return the `%p` set %s input value', (type, err)=>{
            expect(error(null, { type, error: err })).toMatchSnapshot()
            expect(error(undefined, { type, error: err })).toBe(err)
        })
    })
})
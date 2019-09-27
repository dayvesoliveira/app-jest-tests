import React from 'react'

// const fn = jest.fn()

describe('index', () => {
    
    it('#render testando se está com a configuracao correta', ()=>{
        expect('a').toBe('a')
    })

    test('dois mais dois é quatro', () => {
        expect(2 + 2).toBe(4);

       // expect(fn)
    })


})
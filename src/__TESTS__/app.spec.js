import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './../App.jsx'

describe('<App>', () => {
    
    it('shoulder #render <App />', () => {
        expect(shallow(<App />).children('h6')).toBe(true)
    })

    it('#render testando se está com a configuracao correta', ()=>{
        expect('a').toBe('a')
    })
})
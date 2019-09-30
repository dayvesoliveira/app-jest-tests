import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../App';

import {render, fireEvent} from '@testing-library/react'

describe('<App>', () => {

    const wrapper = shallow(<App />);

    it('shoulder #render <App />', () => {
        expect(wrapper).toBeDefined();

    })
    
    it('#render testando se está com a configuracao correta', ()=>{
        expect(wrapper.find('h1').length).toBe(1)
    })

    describe('shoulder render <App >, h1 text',()=>{

        const title = '<h1>Hello, world!</h1>'
        const titleText = 'Hello, world!'

        it('#render by testing library/react <label>', ()=>{
            const {getByLabelText} = render(<App />)
            expect(!getByLabelText('TesteLabel')).toBe(false)
        })
        
        it('#render by testing library/react', ()=>{
            const {queryByText, getByText} = render(<App />)
            expect(queryByText(title)).toBeNull()
            expect(getByText(titleText)).toBeDefined()
        })

    })

})
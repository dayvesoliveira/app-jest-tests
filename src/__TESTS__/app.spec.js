import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../App';

import {render, fireEvent} from '@testing-library/react'

describe('<App>', () => {


    describe('utilizando o enzyme para fazer os testes',()=>{

        const wrapper = shallow(<App />);
    
        it('#render <App />', () => {
            expect(wrapper).toBeDefined();
    
        })
        
        it('#render testando se está com a configuracao do jest', ()=>{
            expect(wrapper.find('h1').length).toBe(1)
        })
    })


    describe('utilizando o @testing-library/react para fazer os testes dos components "React"',()=>{

        const title     = '<h1>UI<b>Faces</b></h1>'
        const titleText = 'Faces'
        
        it('#getByLabelText: valida renderização do <input />', ()=>{
            const {getByLabelText} = render(<App />)
            const inputNode = getByLabelText('Username')
            expect(inputNode).toBeDefined()
        })
        
        it('testa as funções: #queryByText, #getByText', ()=>{
            const {queryByText, getByText} = render(<App />)
            expect(queryByText(title)).toBeNull()
            expect(getByText(titleText)).toBeDefined()
        })

    })

})
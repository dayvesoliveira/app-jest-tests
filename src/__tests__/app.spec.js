import React from 'react'
import { shallow, mount } from 'enzyme'
// import {render, fireEvent} from '@testing-library/react'
import ConnectedApp, { App, mapStateToProps } from '../App'

import configureStore from '../store'
import { Provider as ReduxProvider } from 'react-redux'

const initStore = configureStore({})

const Provider = ({store = initStore, children}) => (
    <ReduxProvider store={ store }>
       { children }
    </ReduxProvider>
)

describe('<ConnectedApp />', () => {
    describe('utilizando o enzyme para fazer os testes',()=>{
        const wrapper = shallow(<Provider><ConnectedApp /></Provider>)
        it('#render <ConnectedApp />', () => {
            expect(wrapper).toBeDefined()
        })
    })
})


describe('<App />', () => {

    describe('utilizando o enzyme para fazer os testes',()=>{
        const wrapper = shallow(<App />)
        it('#render testando se está com a configuracao do jest', ()=>{
            expect(wrapper.find('h1').length).toBe(1)
        })
    })

    describe('mapStateToProps', ()=>{
        it('should call mapStateToProps function return initialState value', ()=>{
            const stateMock = {"payload": "true"}
            const mapStateToPropsMock = jest.fn(mapStateToProps)
            expect(mapStateToPropsMock(stateMock)).toStrictEqual( stateMock )
        })
    })
/*
    describe('utilizando o @testing-library/react para fazer os testes dos components "React"',()=>{

        const title     = '<h1>UI<b>Faces</b></h1>'
        const titleText = 'Faces'

        it('#getByLabelText: valida renderização do <input />', ()=>{
            const {getByLabelText} = render(<Provider store={initStore}><ConnectedApp /></Provider>)
            console.log(getByLabelText)
            //const inputNode = getByLabelText('Username')
            //expect(inputNode).toBeDefined()
        })
        
        // it('#getByLabelText: valida renderização do <input />', ()=>{
        //     const {getByLabelText} = renderWithRedux(<ConnectedApp />)
        //     const inputNode = getByLabelText('Username')
        //     expect(inputNode).toBeDefined()
        // })
        
        // it('testa as funções: #queryByText, #getByText', ()=>{
        //     const {queryByText, getByText} = renderWithRedux(<App />)
        //     expect(queryByText(title)).toBeNull()
        //     expect(getByText(titleText)).toBeDefined()
        // })
    })
*/
})
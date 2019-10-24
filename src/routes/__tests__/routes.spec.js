import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Routes from '../index'

describe('routes using memory router', () => {

    it('should show Home component for / router (using memory router)', () => {
        const component = mount(
            <MemoryRouter initialEntries = {['/']} >
                <Routes />
            </MemoryRouter>
        )
        expect(component.find(Routes)).toHaveLength(1)
        expect(component).toMatchSnapshot()
    })

    // it('should show No match component for route not defined', () => {
    //     const component = mount(
    //         <MemoryRouter initialEntries = {['/posts','1']} >
    //             <Routes />
    //         </MemoryRouter>
    //     )
    //     expect(component.find(Crud)).toHaveLength(1)
    // })

})
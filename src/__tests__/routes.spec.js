import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import RouterApp from '../routes'
import { App } from '../App'
import { Crud } from '../components/crud/list'

describe('routes using memory router', () => {

    it('should show Home component for / router (using memory router)', () => {
        const component = mount(
            <MemoryRouter initialEntries = {['/']} >
                <RouterApp />
            </MemoryRouter>
        )
        expect(component.find(App)).toHaveLength(1)
    })

    it('should show No match component for route not defined', () => {
        const component = mount(
            <MemoryRouter initialEntries = {['/posts','1']} >
                <RouterApp/>
            </MemoryRouter>
        )
        expect(component.find(Crud)).toHaveLength(1)
    })

})
import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Routes from '../routes'

describe('routes using memory router', () => {

    it('should show Home component for / router (using memory router)', () => {
        const component = shallow(
            <MemoryRouter initialEntries={['/']} >
                <Routes />
            </MemoryRouter>
        )
        expect(component).toMatchSnapshot()
        expect(component.find(Routes)).toHaveLength(1)
    })

})
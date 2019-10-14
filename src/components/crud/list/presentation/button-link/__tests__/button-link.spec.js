import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter, BrowserRouter} from 'react-router-dom'

import ButtonLink from '..'

describe('<ButtonLink />',()=>{

    const ID_MOCK = 1112

    let wrapper

    beforeEach(()=>{
        wrapper = mount(<MemoryRouter><ButtonLink id={ ID_MOCK } /></MemoryRouter>)
    })

    it('#render <ButtonLink />', () => {
        expect(wrapper).toBeDefined()
    })

})
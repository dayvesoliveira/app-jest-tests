import React from 'react'
import { shallow, mount } from 'enzyme'

import GridPost from '..'

import { MOCK_POSTS } from '../../../../../config/tests/__mocks__/posts.mock'

const listPostsMock = MOCK_POSTS

describe('<GridPost />', () => {

    const defaultProps = {
        searchPosts: listPostsMock,
        handleDelete: jest.fn()
    }

    const props = {
        ...defaultProps
    }

    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<GridPost {...props} />)
    })

    describe('utilizando o enzyme para fazer os teste de rederização',()=>{
    
        it('#render <GridPost />', () => {
            expect(wrapper).toBeDefined()
        })
        
        it('#render <tr>, <td>, a renderização das linhas ', ()=>{
            expect(wrapper.find('thead tr').length).toBe(1)
            expect(wrapper.find('tbody tr').length).toBe(2)
            expect(wrapper.find('tbody td').length).toBe(10)
        })
        
    })

    describe('#event', ()=>{
        
        const propsEvents = {
            searchPosts: [ listPostsMock[0] ],
            handleDelete: jest.fn()
        }

        it('valida se o evento foi disparado ao clicar em btn-edit', () => {
            
            const component = mount(<GridPost { ...propsEvents } />)

            component.find('.btn-edit').simulate('click')
            
            expect(component.find('.btn-edit')).toMatchSnapshot()

        })

        it('valida se o evento foi disparado ao clicar em btn-exclude', () => {
            const spy = jest.fn()
            const component = mount(<GridPost {...propsEvents} handleDelete={spy} />)

            expect(component.find('.btn-exclude').length).toBe(1)

            component.find('.btn-exclude').simulate('click')
            
            expect(component.find('.btn-exclude')).toMatchSnapshot()

            expect(spy).toHaveBeenCalled();
        })
    })

})
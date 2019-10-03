import React from 'react'
import { shallow, mount } from 'enzyme'

import GridPost from '../'
import { MOCK_POSTS } from './mock'

const listPostsMock = MOCK_POSTS

describe('<GridPost />', () => {

    const defaultProps = {
        listPosts: listPostsMock,
        editPost: jest.fn(),
        excludePost:jest.fn()
    }

    const props = {
        ...defaultProps
    }

    describe('utilizando o enzyme para fazer os teste de rederização',()=>{

        const wrapper = mount(<GridPost {...props} />);
    
        it('#render <GridPost />', () => {
            expect(wrapper).toBeDefined();
        })
        
        it('#render <tr>, <td>, a renderização das linhas ', ()=>{
            expect(wrapper.find('thead tr').length).toBe(1)
            expect(wrapper.find('tbody tr').length).toBe(2)
            expect(wrapper.find('tbody td').length).toBe(10)
        })
        
    })

})
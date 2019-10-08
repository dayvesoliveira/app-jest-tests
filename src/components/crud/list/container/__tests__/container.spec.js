import React from 'react'
import { shallow, mount } from 'enzyme'

import { Provider as RdxProvider } from 'react-redux'

import Crud, { CrudPureContainer } from '../index'
import { MOCK_POSTS } from '../../../../../config/tests/__mocks__/posts.mock'

const Provider = ({
    children, 
    store
}) => <RdxProvider store={ store }>{ children }</RdxProvider>


const props = {
    fetchSearchPosts: jest.fn(),
    resetPosts: jest.fn(),
    searchPosts: [],
    handleDelete: jest.fn()
}

describe('<RdxProviderCrud />', ()=>{

    let providerCrudContainer = (
        <Provider>
            <Crud {...props} />
        </Provider>
    )

    describe('#render provider', ()=>{
        it('should render provider correctly with redux', ()=>{
            shallow(providerCrudContainer)
            expect(providerCrudContainer).toBeDefined()
        })
    })

})

describe('<RdxProviderCrud />', ()=>{

    let componentShallowed
    let instance

    beforeEach(()=> {
        componentShallowed = shallow(<CrudPureContainer {...props} />)
        instance = componentShallowed.instance()
    })

    describe('#componentDidMount()', ()=>{
        it('should dispatch `fetchSearchPosts()` action', async ()=>{
            instance.componentDidMount()
            expect(props.fetchSearchPosts).toHaveBeenCalled()
        })
    })

    const newProps = {
        ...props,
        searchPosts: MOCK_POSTS
    }

    describe('#render', ()=>{
        it('should render <table />, <thead />, <tr/> and <td />', ()=>{
            const component = mount(<CrudPureContainer {...newProps} />)
            expect(component.find('thead tr').length).toBe(1)
            expect(component.find('tbody tr').length > 0).toBe(true)
        })
    })

    describe('#handleDelete',()=>{

        it('should call handleDelete', ()=>{
            const ID_MOCK = 1111
            const handleDeleteSpy = jest.spyOn(instance, 'handleDelete')
            instance.handleDelete(ID_MOCK)
            expect(handleDeleteSpy).toHaveBeenCalled()
            
            // expect(props.deletePost).toHaveBeenCalledWith(1)
        })

    })
})
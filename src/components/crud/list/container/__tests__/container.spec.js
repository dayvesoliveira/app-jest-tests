import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { shape } from 'prop-types'

import { Provider as RdxProvider } from 'react-redux'

import configureStore from '../../../../../store'

const store = configureStore()


import Crud, { CrudPureContainer } from '../index'
import { MOCK_POSTS } from '../../../../../config/tests/__mocks__/posts.mock'

const MOCK_ITEM = MOCK_POSTS[0]

const Provider = ({
    children, 
    store
}) => <RdxProvider store={ store }>{ children }</RdxProvider>

const props = {
    fetchSearchPosts: jest.fn(),
    resetPosts: jest.fn(),
    searchPosts: [],
    deletePost: jest.fn()
}

describe('<RdxProviderCrud />', ()=>{

    let providerCrudContainer = (
        <Provider store={store}>
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

// const router = {
//     history: new BrowserRouter().history,
//     route: {
//         location: {},
//         match: {},
//     },
// }

// const createContext = () => ({
//     context: { router },
//     childContextTypes: { router: shape({}) },
// })

describe('<CrudPureContainer />', ()=>{

    let componentShallowed
    let instance

    beforeEach(()=> {
        componentShallowed = mount(
            <MemoryRouter>
                <CrudPureContainer {...props} />
            </MemoryRouter>
        )
        
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
        searchPosts: [ MOCK_ITEM ],
    }

    describe('#render', ()=>{
        it('should render <table />, <thead />, <tr/> and <td />', ()=>{
            const component = mount(<MemoryRouter><CrudPureContainer {...newProps} /></MemoryRouter>)
            expect(component.find('thead tr').length).toBe(1)
            expect(component.find('tbody tr').length > 0).toBe(true)
        })
    })

    describe('#handleDelete',()=>{

        it('should call handleDelete', ()=>{

            const component = mount(<MemoryRouter><CrudPureContainer {...newProps}  /></MemoryRouter>)
            
            expect(component.find('.btn-exclude').length).toBe(1)

            component.find('.btn-exclude').simulate('click')
            
            expect(component.find('.btn-exclude')).toMatchSnapshot()
        })

        it('should call handleDelete and return message error',()=>{
            const newMockItem = MOCK_ITEM.id = ''
            const searchPosts = [ newMockItem ]

            const component = mount(<MemoryRouter><CrudPureContainer {...newProps} searchPosts={searchPosts} /></MemoryRouter>)
            
            expect(component.find('.btn-exclude').length).toBe(1)

            component.find('.btn-exclude').simulate('click')
        })
    })
})
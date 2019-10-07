import React from 'react'
import { shallow } from 'enzyme'

import { Provider as RdxProvider } from 'react-redux'

import Crud, { CrudPureContainer } from '../index'

const Provider = ({
    children, 
    store
}) => <RdxProvider store={ store }>{ children }</RdxProvider>


const props = {
    fetchSearchPosts: jest.fn(),
    resetPosts: jest.fn(),
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
        instance = componentShallowed.instance
    })

    describe('#componentDidMount()', ()=>{
        it('should dispatch `fetchSearchPosts()` action', async()=>{
            instance.componentDidMount()
            expect(props.fetchSearchPosts).toHaveBeenCalled()
        })
    })

    // it('#render instance <CrudPureContainer />', ()=>{
    //     expect()
    // })
})
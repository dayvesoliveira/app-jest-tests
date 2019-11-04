import React, { createContext, useContext, useReducer } from 'react'

import { default as reducer } from './reducer'

import DetailContainer from './container'
import { initialState } from './reducer'

const StateContext = createContext()

const StateProvider = ({reducer, initialState, children}) => ( 
    <StateContext.Provider value = { useReducer(reducer, initialState) }> 
      { children }
    </StateContext.Provider> 
)

export const useStateValue = () => useContext( StateContext )

const CrudDetailHooks = () =>(
    <StateProvider initialState={ initialState } reducer={reducer}>
        <DetailContainer />
    </StateProvider>
)

export default CrudDetailHooks 
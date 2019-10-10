import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(preloadedState = {}) {

    const store = createStore(
        reducers, 
        preloadedState,
        composeWithDevTools(
            applyMiddleware(thunkMiddleware)
        )
    )

    return store
}



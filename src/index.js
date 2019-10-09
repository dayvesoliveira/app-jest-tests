import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import { App } from './App.jsx'

const initStore = configureStore()

ReactDOM.render(
    <Provider store={ initStore }>
        <App />
    </Provider>,
    document.getElementById('root')
)
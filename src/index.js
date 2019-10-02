import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './App.jsx'

const ProviderApp = ({ store }) => (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(
    <ProviderApp store={ store } />,
    document.getElementById('root')
)
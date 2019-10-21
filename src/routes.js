import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import { Crud } from './components/crud/list'

import { App } from './App.jsx'

import { Provider } from 'react-redux'
import configureStore from './store'
import { CrudDetail } from './components/crud/detail'

const initStore = configureStore()

const RouterApp = () =>(
    <>
    <Provider store={ initStore }>
        <Router>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/posts/:id" component={CrudDetail}></Route>
            </Switch>
        </Router>
    </Provider>
    </>
)

export default RouterApp
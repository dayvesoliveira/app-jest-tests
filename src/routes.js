import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

//import { App } from './App.jsx'
//import { Crud } from './components/crud/list'
//import { CrudDetail } from './components/crud/detail'

const App = lazy(() => import('./App.jsx'))
const CrudDetail = lazy(() => import('./components/crud/detail'))

const initStore = configureStore()

const RouterApp = () =>(
    <Provider store={ initStore }>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route path="/posts/:id" component={ CrudDetail } />
                </Switch>
            </Suspense>
        </Router>
    </Provider>
)

export default RouterApp
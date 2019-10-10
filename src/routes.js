import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Crud } from './components/crud/list'

const RouteApp = () =>(
    <Router>
        <Switch>
            <Route exact path="/"><Crud /></Route>
            {/* <Route path="/:id" children={<Child />} /> */}
        </Switch>
    </Router>
)

export default RouteApp
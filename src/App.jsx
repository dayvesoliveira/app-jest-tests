import React from 'react'
import { connect } from 'react-redux'
//import { Crud } from './components/crud/list'
import RouteApp from './routes'


export class App extends React.Component {
    render(){
        return (
            <div>
                <h1>UI<b>Faces</b></h1>
                <label>
                    Username: 
                    <input placeholder="somenete para testes com jest" />
                </label>
                <RouteApp />
            </div>
        )
    }
}

export const mapStateToProps = state =>({ ...state })

export default connect(mapStateToProps)(App)
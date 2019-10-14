import React from 'react'
import { connect } from 'react-redux'
import { Crud } from './components/crud/list'

export class App extends React.Component {
    render(){
        return (
            <>
                <h1>UI<b>Faces</b></h1>
                <label>
                    Username: 
                    <input placeholder="somenete para testes com jest" />
                </label>
                <Crud />
            </>
        )
    }
}

export const mapStateToProps = state =>({ ...state })

export default connect(mapStateToProps)(App)
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import { Crud } from './components/crud/list'

import Routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './store'

const initStore = configureStore()

import { default as routePosts } from './routes/post.routes'


export class App extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Provider store={ initStore }>
                <Fragment>
                    <h1>UI<b>Faces</b></h1>
                    <label>
                        Username: 
                        <input placeholder="somenete para testes com jest" />
                    </label>
                    <br />
                    <br />
                    <Router>
                        <Routes routes={ routePosts }/>
                    </Router>
                </Fragment>
            </Provider>
        )
    }
}

export const mapStateToProps = state =>({ ...state })

export default connect(mapStateToProps)(App)
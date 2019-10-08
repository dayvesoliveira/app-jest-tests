import React from 'react'

import {Crud} from './components/crud/list'

export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>UI<b>Faces</b></h1>
                <label>
                    Username
                    <input placeholder="Digite" />
                </label>
                <Crud />
            </div>
        )
    }
}
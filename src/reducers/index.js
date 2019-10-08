import { combineReducers } from 'redux'

import {reducer as crudReducer} from '../components/crud/list'

const rootReducer = combineReducers({
    crudReducer
})

export default rootReducer
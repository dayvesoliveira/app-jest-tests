import { combineReducers } from 'redux'

import { reducer as crudReducer} from '../components/crud/list'
import { reducer as crudDetailReducer } from '../components/crud/detail'

export default combineReducers({
    crudReducer,
    crudDetailReducer
})
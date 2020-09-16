import {combineReducers} from 'redux'
import timerReducer from './timerReducer'
import itemsReducer from './itemsReducer'
import modalMenuReducer from './modalMenuReducer'

const reducers = combineReducers({
    timerReducer,
    itemsReducer,
    modalMenuReducer   
})

export default reducers


import {combineReducers} from 'redux';
import timerReducer from './timerReducer';
import itemsReducer from './itemsReducer'

const reducers = combineReducers({
    timerReducer,
    itemsReducer
})

export default reducers


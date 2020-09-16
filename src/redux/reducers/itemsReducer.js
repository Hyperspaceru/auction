// import {addItem,deleteItem,updateItem} from '../actions'
import { items } from '../state'

const sortByCost = (itemA, itemB) => {
    return itemB.cost - itemA.cost
}

const itemsReducer = (state = items, action) => {
    let newState 
    let _state
    switch (action.type) {
        case 'ADD_ITEM':
            newState = [...state]
            _state = [
                ...newState,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    cost: action.payload.cost
                }
            ]
            newState = _state.sort((itemA, itemB) => sortByCost(itemA, itemB))
            return newState 
        case 'DELETE_ITEM':
            _state = [...state]
            newState = _state.filter(item => item.id !== action.payload)
            return newState
        case 'UPDATE_ITEM':
            _state=[...state]
            newState = _state.filter(item => item.id !== action.payload.id)
            _state = [...newState,{
                id:action.payload.id,
                text: action.payload.text,
                cost: action.payload.cost
            }]
            newState = _state.sort((itemA, itemB) => sortByCost(itemA, itemB))
            return newState
        default:
            return state
    }
}

export default itemsReducer
import React, { useState, useEffect } from 'react';
import './ListItem.scss'
import { useDispatch } from 'react-redux';
import { updateItem } from '../../redux/actions/itemsActions';


const checkMathExp = (str) => {
    const regex = /^\d+(\s*[+\-*/]\s*\d+)+$/g
    if (str.match(regex)) {
        return true
    }
    return false
}
function ListItem(props) {
    const [_text, setText] = useState(props.text)
    const [_cost, setCost] = useState(props.cost)
    const dispatch = useDispatch()

    const handleChange = (event, state) => {
        state(event.target.value)
    }

    const handleTextFocus = (event) => {
        let value = event.target.value
        setText(value)
        dispatch(updateItem({ id: props.id, text: value, cost: _cost }))
    }

    const handleTextKey = (event) => {
        let value = event.target.value
        if (event.key === 'Enter' || event.keyCode === 13) {
            setText(value)
            dispatch(updateItem({ id: props.id, text: value, cost: _cost }))
        }
       
    }
    
    const handleCostFocus = (event) => {
        let value = event.target.value
        if (checkMathExp(value)) {
            value = eval(value)
        }
        setCost(value)
        dispatch(updateItem({ id: props.id, text: _text, cost: value }))
        
    }

    const handleCostKey = (event) => {
        let value = event.target.value
        if (event.key === 'Enter' || event.keyCode === 13) {
            if (checkMathExp(value)) {
                value = eval(value)
            }
            setCost(value)
            dispatch(updateItem({ id: props.id, text: _text, cost: value }))
        }        
    }
    return (
        <div className="list__item">
            <div className="list__input_group">
                <input type="text" className="list__input" value={_text} onChange={e => handleChange(e, setText)} onKeyUp={e => handleTextKey(e)} onBlur={e => handleTextFocus(e)} placeholder="Название" />
                <input type="text" className="list__input input_cost" value={_cost} onChange={e => handleChange(e, setCost)} onKeyUp={e => handleCostKey(e)} onBlur={e => handleCostFocus(e)} placeholder="Сумма" pattern="[0-9\.\+\-\*\/]*" />
            </div>
            <button className="list__delete" onClick={props.onDelete} ><i class="fas fa-times"></i></button>
        </div>
    )
}

export default ListItem;


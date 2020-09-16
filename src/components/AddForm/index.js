import React, { useState, useEffect } from 'react';
import './AddForm.scss'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions/itemsActions';
import { useRef } from 'react';

const handleChange = (event, state) =>{
    state(event.target.value)
}

function AddForm() {
    const dispatch = useDispatch()
    const [text,setText] = useState()
    const [cost,setCost] = useState()
    const textRef = useRef(null)

    const handleSubmit = (event) =>{    
        dispatch(addItem({
            text:text,
            cost:cost
        }))
        event.preventDefault()
        setText('')
        setCost('')
        textRef.current.focus()
    }


    return (
        <form onSubmit={e=>handleSubmit(e)} className="add-form" id="add-form">
            <button type="submit" className="add-form_submit" form="add-form">Добавить</button>
            <div className="add-form_input-group">
                <input ref={textRef} type="text" className="add-form_input" value={text} onChange={e=>handleChange(e,setText)} />
                <input type="text" className="add-form_input" value={cost} onChange={e=>handleChange(e,setCost)} />
            </div>
        </form>
    );
}

export default AddForm;
import React, { useState, useEffect } from 'react';
import './List.scss'
import ListItem from '../ListItem'
import { useSelector,useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions/itemsActions';

function List() {
    const items = useSelector(state=>state.itemsReducer)
    const dispatch = useDispatch()
    return (
        <section className="list">
            {items.map(item=>{
                return <ListItem key={item.id} id={item.id} text={item.text} cost={item.cost} onDelete={()=>{dispatch(deleteItem(item.id))}}></ListItem>
            })}
            
        </section>
    );
}

export default List;
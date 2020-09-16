import React from 'react'
import { useSelector } from 'react-redux';
import './BuyoutItem.scss'

function BuyoutItem() {
    const modalStore = useSelector(state => state.modalMenuReducer)
    return (
    <p className={`buyoutItem ${modalStore.buyoutEnabled?'':'buyoutItem--hide'}`}>Выкуп {modalStore.buyoutCost}</p>
    )
}

export default BuyoutItem

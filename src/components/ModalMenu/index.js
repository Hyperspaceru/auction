import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { pauseTimer, plusMinute, minusMinute, resetTimer, startTimer } from '../../redux/actions/timerActions';
import './ModalMenu.scss'

function ModalMenu() {
    const timerStore = useSelector(state => state.timerReducer)
    return (
        // <div className="modal">
        <div className="modal">
            <div className="modal_menu">
                <div className="modal_menu__item">Скачать список</div>
                <div className="modal_menu__item">
                    <label className="switch__title">Выкуп</label>
                    <label class="switch">
                        <input type="checkbox" class="switch__checkbox" />
                        <div class="switch__slider"></div>
                    </label>
                    <input class="" type="text" />
                </div>
                <div className="modal_menu__item">Размер столбца
            <div class="slidecontainer">
                        <input type="range" min="1" max="100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalMenu;
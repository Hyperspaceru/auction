import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { pauseTimer, plusMinute, minusMinute, resetTimer, startTimer } from '../../redux/actions/timerActions';
import './ControlBar.scss'
import { showMenu } from '../../redux/actions/modalMenuActions';



function ControlBar() {
    const dispatch = useDispatch()
    const timerStore = useSelector(state => state.timerReducer)

    return (
        <div className="control-bar">
            <button className="control-bar_button" onClick={()=>dispatch(resetTimer())}><i class="fas fa-stop"></i></button>
            <button className="control-bar_button" onClick={()=>dispatch(plusMinute())}><i class="fas fa-plus"></i></button>
            <button className={`control-bar_button ${timerStore.isPause?'':'button--disable'}`} onClick={()=>dispatch(startTimer())}><i class="fas fa-play"></i></button>
            <button className={`control-bar_button ${timerStore.isPause?'button--disable':''}`} onClick={()=>dispatch(pauseTimer())}><i class="fas fa-pause"></i></button>
            <button className="control-bar_button" onClick={()=>dispatch(minusMinute())}><i class="fas fa-minus"></i></button>
            <button className="control-bar_button" onClick={()=>dispatch(showMenu())}><i class="fas fa-ellipsis-h"></i></button>
        </div>
    );
}

export default ControlBar;
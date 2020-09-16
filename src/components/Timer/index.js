import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stopTimer, resetTimerDone, minuteUpdateDone } from '../../redux/actions/timerActions';
import './Timer.scss';

const minute = 60 * 1000

const formatTime = (ms) => {
  let timeLeft = {
    minutes: Math.floor((ms / 1000 / 60) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    mills: ms % 1000
  }
  return timeLeft
}

const Timer = ({ initialTime }) => {
  const timerLeft = useRef(initialTime)
  const previousTime = useRef(null)
  const [formatedLeftTime, setFormatedLeftTime] = useState(formatTime(0))
  const [timerId, setTimerId] = useState(null)
  const dispatch = useDispatch()
  const timerStore = useSelector(state => state.timerReducer)

  useEffect(() => {   
    //plus/minus minute           
    if (timerStore.minuteUpdate !== 0) {
      timerLeft.current = Math.max(timerLeft.current + (minute * timerStore.minuteUpdate) , 0)
      dispatch(minuteUpdateDone())
      setFormatedLeftTime(formatTime(timerLeft.current))
    }
    //reset timer
    if (timerStore.reset) {
      timerLeft.current = initialTime
      previousTime.current = null
      dispatch(resetTimerDone())
      setFormatedLeftTime(formatTime(timerLeft.current))
    }
    if (timerStore.isPause || timerStore.timeIsOver) {
      clearInterval(timerId)
      previousTime.current = null
      if(timerStore.timeIsOver){
        timerLeft.current = 0
      }
      setFormatedLeftTime(formatTime(timerLeft.current))
    } else {
      const id = setInterval(() => {     
        let previousTmp = previousTime.current ? previousTime.current : Date.now()
        let diff = Date.now() - previousTmp
        let left = timerLeft.current - diff
        //out of time
        if (left < 10) {
          dispatch(stopTimer())
          timerLeft.current = 0
          setFormatedLeftTime(0)
        } else {
          previousTime.current = Date.now()
          timerLeft.current = left
          setFormatedLeftTime(formatTime(left))
        }
      }, 33);

      setTimerId(id)
    }
    // Clear timeout if the component is unmounted
    return () => clearInterval(timerId);
  }, [timerStore, dispatch]);

  return (<div className="timer_container">
    <p className="timer">{formatedLeftTime.minutes ? formatedLeftTime.minutes : 0} : {formatedLeftTime.seconds ? formatedLeftTime.seconds : 0} : {formatedLeftTime.mills ? formatedLeftTime.mills : 0}</p>
    
    </div>
  )
}

export default Timer
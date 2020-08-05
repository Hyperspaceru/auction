import React, { useEffect, useState,useRef } from 'react';
import '../css/Timer.scss';

const calculateTimeLeft = (timeEnd) => {
  let time = new Date().getTime();
  let difference = timeEnd - time;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      mills: difference % 1000
    };
  }

  return timeLeft;
}

const formatTime = (ms) =>{
   let timeLeft = {
    minutes: Math.floor((ms / 1000 / 60) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    mills: ms % 1000
  }
  return timeLeft
}

// const Timer = function(callback, delay) {
//   let timerId, start, remaining = delay;

//   this.pause = function() {
//       clearTimeout(timerId);
//       remaining -= Date.now() - start;
//   };

//   this.resume = function() {
//       start = Date.now();
//       clearTimeout(timerId);
//       timerId = setTimeout(callback, remaining);
//   };

//   this.resume();
// };

const Timer = ({ initialTime, isPause }) => {

  // const [timerLeft, setTimerLeft] = useState(initialTime)
  const timerLeft = useRef(initialTime)
  const previousTime = useRef(null)
  // const [previousTime, setPreviousTime] = useState(null)
  const [formatedLeftTime, setFormatedLeftTime] = useState(formatTime(0))
  const [timerId, setTimerId] = useState(null)
  const [pause, setPause] = useState(isPause)

  useEffect(() => {
    if (pause) {
      clearInterval(timerId)
      previousTime.current = null
    } else {
      const id = setInterval(() => {
        let previousTmp = previousTime.current ? previousTime.current : Date.now()
        let diff = Date.now() - previousTmp
        let left = timerLeft.current - diff
        if (left<10){
          setPause(true)
          timerLeft.current=0
          setFormatedLeftTime(0)    
        }else{
          // setPreviousTime(Date.now())
          previousTime.current = Date.now()
          timerLeft.current = left
          setFormatedLeftTime(formatTime(left))          
        }
      }, 33);
      setTimerId(id)
    }
    // Clear timeout if the component is unmounted
    return () => clearInterval(timerId);
  }, [pause]);

  // useEffect(()=>{

  // },[])
  return (
    <span className="timer">{formatedLeftTime.minutes?formatedLeftTime.minutes:0} : {formatedLeftTime.seconds?formatedLeftTime.seconds:0} : {formatedLeftTime.mills?formatedLeftTime.mills:0}</span>
  )
}

export default Timer
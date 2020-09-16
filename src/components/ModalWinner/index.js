import React , {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stopTimerDone, stopTimer } from '../../redux/actions/timerActions';
import './ModalWinner.scss'

const maxReducer = (max, current) => max.cost >= current.cost ? max : current

function ModalWinner() {
    const items = useSelector(state => state.itemsReducer)
    const timer = useSelector(state => state.timerReducer)
    const modal = useSelector(state => state.modalMenuReducer)
    const [winner, setWinner] = useState(items.length>0?items.reduce(maxReducer):{})
    const dispatch = useDispatch()

    useEffect(()=>{ 
        if (items.length>0){
            setWinner(items.reduce(maxReducer))
        }
    },[items])

    useEffect(() => {        
        // debugger
        if (modal.buyoutEnabled && winner.cost>=modal.buyoutCost && modal.buyoutCost>0 && (!timer.isPause||timer.timeIsOver)){
            dispatch(stopTimer())
        }
    },[winner,timer.isPause])

    if (items.length > 0) {
        return (
            <div className={`modal-winner ${timer.timeIsOver ? '' : 'modal-winner--disable'}`} onClick={() => dispatch(stopTimerDone())}>
            {/* <div className={`modal-winner ${(timer.timeIsOver) || (modal.buyoutEnabled && winner.cost >= modal.buyoutCost && modal.buyoutCost>0 && (!timer.isPause||timer.timeIsOver)) ? '' : 'modal-winner--disable'}`} onClick={() => dispatch(stopTimerDone())}> */}
                <div className="modal-winner_text">
                    <h1 className="modal-winner_h1">Победитель</h1>
                    <h3 className="modal-winner_name">{winner.text}</h3>
                    <p className="modal-winner_price">{winner.cost} рублей</p>
                </div>
            </div>
        )

    } else {
        return ''
    }

}

export default ModalWinner;
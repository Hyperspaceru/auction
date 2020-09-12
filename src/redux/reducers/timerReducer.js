
const initialState = {
    isPause: true,
    minuteUpdate:0,
    timeIsOver:false,
    reset:false
}


const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return {
                ...state,
                isPause: false,
                timeIsOver: false
            }
        case 'PAUSE_TIMER':
            return {
                ...state,
                isPause: true
            }
        case 'STOP_TIMER':
            return { 
                ...state,
                timeIsOver:true,
                isPause:true                    
            }
        case 'RESET_TIMER':
            return {
                ...initialState,
                reset:true
            }
        case 'RESET_TIMER_DONE':
            return {
                ...state,
                reset:false
            }
        case 'PLUS_MINUTE':
            return {
                ...state,
                minuteUpdate:1
            }
        case 'MINUS_MINUTE':
            return {
                ...state,
                minuteUpdate:-1
            }
        case 'MINUTE_UPDATE_DONE':
            return{
                ...state,
                minuteUpdate:0
            }
        default:
            return state
    }
}

export default timerReducer
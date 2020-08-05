const initialState = {
    isPause: true,
    time: 0
}

const minute = 60 * 1000

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return {
                ...state,
                isPause: false
            }
        case 'PAUSE_TIMER':
            return {
                ...state,
                isPause: true
            }
        case 'STOP_TIMER':
            return { ...initialState }
        case 'PLUS_MINUTE':
            return {
                ...state,
                time: state.time + minute
            }
        case 'MINUS_MINUTE':
            return {
                ...state,
                time: state.time - minute
            }
        default:
            return state
    }
}

export default timerReducer
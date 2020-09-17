const initialState = {
    menuIsVisible: false,
    buyoutEnabled: false,
    buyoutCost: 0
    
}

const modalMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MENU':
            return {
                ...state,
                menuIsVisible: true
            }
        case 'HIDE_MENU':
            return {
                ...state,
                menuIsVisible: false
            }
        case 'ENABLE_BUYOUT':
            return {
                ...state,
                buyoutEnabled:true
            }
        case 'DISABLE_BUYOUT':
            return {
                ...state,
                buyoutEnabled:false
            }
        case 'SET_BUYOUTCOST':
            return {
                ...state,
                buyoutCost:action.payload.cost
            }
        default:
            return state
    }
}

export default modalMenuReducer
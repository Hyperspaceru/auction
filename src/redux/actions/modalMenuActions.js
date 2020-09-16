export const showMenu = () => ({
    type:'SHOW_MENU'
})

export const hideMenu = () => ({
    type:'HIDE_MENU'
})

export const enableBuyout = () =>({
    type: 'ENABLE_BUYOUT'
})

export const disableBuyout = () =>({
    type: 'DISABLE_BUYOUT'
})

export const setBuyoutCost = (cost)=>({
    type: 'SET_BUYOUTCOST',
    payload:{cost:cost}
})
let nextListId = 4

export const addItem = (item) => {
    item.id = nextListId++
    return  {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const deleteItem = (itemId) => ({
    type: 'DELETE_ITEM',
    payload: itemId
})

export const updateItem = (item) => ({
    type: 'UPDATE_ITEM',
    payload: item
})

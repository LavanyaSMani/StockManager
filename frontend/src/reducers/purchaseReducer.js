const purchaseReducer=(state=[],action)=>{
    switch(action.type)
    {
        case 'SET_PURCHASE':{return [...action.payload]}
        case 'NEW_PURCHASE':{
            return [...state,action.payload]
        }
        case 'DELETE_PURCHASE':{
            return state.filter(purchase=>{
                return purchase.id!==action.payload
            })
        }
        default:{return [...state]}
    }
}

export default purchaseReducer
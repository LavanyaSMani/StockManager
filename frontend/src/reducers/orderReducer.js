const orderReducer=(state=[],action)=>{
    switch(action.type)
    {
        case 'SET_ORDER':{return [...action.payload]}
        case 'NEWORDER':{return [...state,action.payload]}
        case 'DELETE_ORDER':{
            return state.filter(order=>{
                return order._id!==action.payload
            })}
        default:{return [...state]}
    }
}

export default orderReducer
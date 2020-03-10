const itemReducer=(state=[],action)=>{
    switch(action.type)
    {
        case 'NEW':{return [...state,action.payload]}
        case 'SET_ITEM':{return [...action.payload]}
        default:{return [...state]}
    }
}

export default itemReducer
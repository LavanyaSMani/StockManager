const categoryReducer=(state=[],action)=>{
    switch(action.type)
    {
        case 'NEW':{return [...state,action.payload]}
        case 'LIST':{return [...action.payload]}
        default:{return [...state]}
    }
}

export default categoryReducer
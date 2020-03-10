const userReducer=(state=[],action)=>{
    switch(action.type)
    {
        case 'REGISTER':{return [...state,action.payload]}
        case 'LOGIN':{return [...state]}
        default:{return [...state]}
    }
}

export default userReducer
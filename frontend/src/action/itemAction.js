import axios from 'axios'


export const newItem=(data)=>{
    console.log("sending to redicer",data)
    return {type:'NEW',payload:data}
}

export const getItem=(data)=>{
   
    return {type:'SET_ITEM',payload:data}
}

export const startNewItem=(data)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3002/item/new',data)
            .then(respose=>{
                console.log("in item ceration",respose.data)
                dispatch(newItem(respose.data))
            })
            .catch(err=>alert(err))
    }
}

export const startGetItem=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3002/items')
            .then(response=>{
                dispatch(getItem(response.data))
            })
            .catch(err=>alert(err))
    }
}
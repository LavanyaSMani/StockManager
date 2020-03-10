import axios from 'axios'

export const newPurchase=(data)=>{
    return {type:'NEW_PURCHASE',payload:data}
}

export const setPurchase=(data)=>{
    return {type:'SET_PURCHASE',payload:data}
}

export const deletePurchase=(id)=>{
    return {type:'DELETE_PURCHASE',payload:id}
}

export const startGetPurchase=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3002/purchases')
            .then(response=>{
                if(response.data.hasOwnProperty('errmsg'))
                {
                    alert("please register with different email", response.data.errmsg)
                }
                else{
                    
                    dispatch(setPurchase(response.data))
                }
            })
    }


}

export const startNewPurchase=(data)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3002/purchase/new',data)
            .then(response=>{
                if(response.data.hasOwnProperty('errmsg'))
                {
                    alert("please register with different email", response.data.errmsg)
                }
                else{
                    
                    dispatch(newPurchase(response.data))
                }
            })
    }

}

export const startDeletePurchase=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3002/purchase/${id}`)
            .then(response=>{
                dispatch(deletePurchase(id))
            })
    }

}

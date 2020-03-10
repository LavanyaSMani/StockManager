import axios from 'axios'

export const setOrder=(data)=>{
    return{type:'SET_ORDER',payload:data}
}

export const newOrder=(data)=>{
    return {type:'NEWORDER',payload:data}
}

export const  deleteOrder=(id)=>{
    return {type:"DELETE_ORDER",payload:id}

}

export const startGetOrder=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3002/orders')
            .then(response=>{
                if(response.data.hasOwnProperty('errmsg'))
                {
                    alert("please register with different email", response.data.errmsg)
                }
                else{
                    
                    dispatch(setOrder(response.data))
                }
            })
    }


}

export const startNewOrder=(formdata)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3002/order/new',formdata)
            .then(response=>{
                if(response.data.hasOwnProperty('errmsg'))
                {
                    alert("please register with different email", response.data.errmsg)
                }
                else{
                    console.log('in else part of stert new order',response.data)
                    // redirect()
                    dispatch(newOrder(response.data))
                }
            })
    }
}

export const startDeleteOrder=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3002/order/${id}`)
            .then(response=>{
                if(response.data.hasOwnProperty('errmsg'))
                {
                    alert("please register with different email", response.data.errmsg)
                }
                else{
                    console.log('in else part of stert new order',response.data)
                    // redirect()
                    dispatch(deleteOrder(id))
                }
            })
    }
    
}
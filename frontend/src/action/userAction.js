import axios from 'axios'

export const register=(data)=>{
    return {type:'REGISTER',payload:data}
}

export const login=()=>{
    return {type:'LOGIN'}
}


export const startRegister=(data,redirect)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3002/register',data)
            .then(response=>{
                if(response.data.hasOwnProperty('errmsg'))
                {
                    alert("please register with different email", response.data.errmsg)
                }
                else{
                    redirect()
                    dispatch(register(response.data))
                }
            })
    }

}

export const startLogin=(formdata,redirect)=>{
    return (dispatch)=>{
        console.log("in start login function")
        axios.post("http://localhost:3002/login",formdata)
        .then(response=>{
            if(response.data.hasOwnProperty('error'))
            {
               alert(response.data.message)
            }
            else{
               console.log("getting response",response)
              console.log(response.data.token)
              const token=response.data.token
               
            
            localStorage.setItem('authToken',token)
            console.log("local storage has",localStorage.getItem('authToken'))
                redirect()
           
            }
          
            
        })
        .catch(err=>alert(err))
    }
}




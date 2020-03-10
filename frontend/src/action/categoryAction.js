import axios from 'axios'

export const newCategory=(data)=>{
    return {type:'NEW',payload:data}
}

export const getCategory=(data)=>{
    return {type:'LIST',payload:data}
}

export const startNewCategory=(data)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3002/category/new',data)
            .then(response=>{
                console.log("catgeoris response got from server",response)
                dispatch(newCategory(response.data))
                
            })
    }

}

export const startGetCategory=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3002/categories')
             .then(response=>{
                 console.log("category list",response.data)
                 dispatch(getCategory(response.data))
             })
    }
}

 
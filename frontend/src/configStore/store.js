import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import orderReducer from '../reducers/orderReducer'
import categoryReducer from '../reducers/categoryReducer'
import itemReducer from '../reducers/itemsReducer'
import purchaseReducer from '../reducers/purchaseReducer'


const taskStore=()=>{
    const store=createStore(combineReducers({
        users:userReducer,
        orders:orderReducer,
        categories:categoryReducer,
        items:itemReducer,
        purchases:purchaseReducer
       
    }),applyMiddleware(thunk))
    return store
}

export default taskStore
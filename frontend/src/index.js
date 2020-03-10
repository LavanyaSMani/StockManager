import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App'
import taskstore from './configStore/store'
import {startGetCategory} from './action/categoryAction'
import {startGetItem} from './action/itemAction'
import { startGetOrder } from './action/orderAction';
import {startGetPurchase} from './action/purcahseAction'

const store=taskstore()
store.subscribe(()=>console.log(store.getState()))

// if(localStorage.getItem('authToken'))
// {
    store.dispatch(startGetCategory())
    store.dispatch(startGetItem())
    store.dispatch(startGetOrder())
    store.dispatch(startGetPurchase())
// }

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)



ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


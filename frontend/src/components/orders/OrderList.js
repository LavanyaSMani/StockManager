import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startDeleteOrder} from '../../action/orderAction'

function OrderList(props){
    console.log("in orderslist",props.orders)
    console.log()
    function handleClick(id)
    {
        console.log("in deleting order")
        props.dispatch(startDeleteOrder(id))
    }
    return (
        <div>
            <br/>
            <h3>LISTING ORDERS::--{props.orders.length}</h3>
            <div className='row'>
                <div className='col-md-10'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>CUSTOMER NAME</th>
                                <th>ITEM ORDERED</th>
                                <th>QUANTITY</th>
                                <th>ORDER AMOUNT</th>
                                <th>AMOUNT_PAID</th>
                                <th>BALANCE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.orders.map((order,i)=>{
                                const total=order.total_amount
                                let balance
                                console.log("total maount from back end",total)
                                const paid=order.amount_paid
                                if(total>paid){
                                    balance=total-paid+'   '+'to be paid'
                                }
                                else{
                                    balance=paid-total+'   '+'to be given'
                                }
                                console.log("balance amount is",balance)
                                return (
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{order.cust_name}</td>
                                        <td>{order.item_name.item_Name}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.amount_paid}</td>
                                        <td>{balance}</td>
                                        <td><button type="button" class="btn btn-danger" onClick={()=>{handleClick(order._id)}}>DELETE</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>

            </div>
            
            {/* <ul>
                {props.orders.map(order=>{
                    const total=order.total_amount
                    let balance
                    console.log("total maount from back end",total)
                    const paid=order.amount_paid
                    if(total>paid){
                        balance=total-paid+'   '+'to be paid'
                    }
                    else{
                        balance=paid-total+'   '+'to be given'
                    }
                    console.log("balance amount is",balance)
                    return <li key={order._id}>
                        CUSTOMER-NAME:{order.cust_name}<br/>
                        ITEM-ORDERED:{order.item_name.item_Name}<br/>
                        QUANTITY:{order.quantity}<br/>
                        TOTAL_AMOUNT_OF_ORDER:{order.total_amount}<br/>
                        AMOUNT-PAID:{order.amount_paid}<br/>
                        BALANCE:{balance}
                        :::::::::<button type="button" class="btn btn-danger" onClick={()=>{handleClick(order._id)}}>DELETE</button>
                    </li>
                })}
            </ul> */}
            <Link to='/order/new' className='btn btn-primary'>PLACE AN ORDER</Link>
            

        </div>
    )

}

const mapStateToPorps=(state)=>{
    return {
        orders:state.orders
    }
}


export default connect(mapStateToPorps)(OrderList)


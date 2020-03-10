import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startDeletePurchase} from '../../action/purcahseAction'

function PurchaseList(props){
    console.log("in purchaselist",props.purchases)
    console.log()
    function handleClick(id)
    {
        console.log("in deleting order")
        props.dispatch(startDeletePurchase(id))
        window.location.reload()
    }
    return (
        <div>
            <h2>LISTING PURCHASES::--{props.purchases.length}</h2>
            <ul>
                {props.purchases.map(purchase=>{
                    const total=purchase.total_amount
                    console.log("total maount from back end",total)
                    const paid=purchase.amt_paid
                    const balance=total-paid
                    console.log("balance amount is",balance)
                    return <li key={purchase._id}>
                        COMPANY-NAME:{purchase.company_name}<br/>
                        CATEGORY:{purchase.category.category_name}<br/> 
                         ITEM-ORDERED:{purchase.item.item_Name}<br/> 
                        QUANTITY:{purchase.quantity}<br/>
                        AMOUNT-PAID:{purchase.amt_paid}<br/>
                        BALANCE:{balance}
                        <button type="button" class="btn btn-danger" onClick={()=>{handleClick(purchase._id)}}>DELETE</button>
                    </li>
                })}
            </ul>
            <Link to='/purchase/new' className='btn btn-primary'>PURCHASE NEW</Link>
            

        </div>
    )

}

const mapStateToPorps=(state)=>{
    return {
        purchases:state.purchases
    }
}


export default connect(mapStateToPorps)(PurchaseList)


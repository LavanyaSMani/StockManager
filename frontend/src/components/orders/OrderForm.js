import React from 'react'
import {connect} from 'react-redux'

import {startNewOrder} from '../../action/orderAction'

class NewOrder extends React.Component{
    constructor()
    {
        super()
        this.state={
            cust_name:'',
            category:'',
            item_name:'',
            quantity:'',
            total_amount:'',
            amount_paid:''
            
        }
    }
    handleoption=(e)=>{
        this.setState({category:e.target.value})
    }
    handleSelect2=(e)=>{
        console.log("item got",e.target.value)
        this.setState({item_name:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            cust_name:this.state.cust_name,
            category:this.state.category,
            item_name:this.state.item_name,
            quantity:this.state.quantity,
            total_amount:this.state.total_amount,
            amount_paid:this.state.amount_paid
            
        }
        const redirect=()=>{this.props.history.push('/orders')}
        this.props.dispatch(startNewOrder(formdata,redirect))
        console.log("getting category",this.state.category,formdata)
        redirect()
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render()
    {
        return (
            <div>

                <form onSubmit={this.handleSubmit} className='col-md-5'>
                    <div className='form-group' >
                    <label htmlFor='cust_name'>CUSTOMER NAME</label>
                    <input type='text' name='cust_name' className='form-control' value={this.state.cust_name} onChange={this.handleChange}/>
                    </div>

                    <div className='form-group'>
                    <label>CATEGORIES</label>
                    <select onChange={this.handleoption} className='form-control' >
                        <option value=''></option>
                        {this.props.categories.map(category=>{
                            return <option value={category._id} >{category.category_name}</option>
                        })}
                    </select>
                    </div>

                    <div className='form-group'>
                    <label>ITEM</label>
                    <select onChange={this.handleSelect2}className='form-control' >
                        <option value=''></option>
                        {this.props.items.map(item=>{
                            
                           return item.category._id===this.state.category?<option value={this.state.item_name} >{item.item_Name}</option>:''
                        })}
                    </select>
                    </div>

                    <div className='form-group'>
                    <label htmlFor='quantity'>QUANTITY</label>
                    <input type='text' name='quantity' className='form-control'value={this.state.quantity} onChange={this.handleChange}/>

                    </div>
                    

                    <div className='form-group'>
                    <label htmlFor='amount_paid'>AMOUNT PAID</label>
                    <input type='text' name='amount_paid' className='form-control'value={this.state.amount} onChange={this.handleChange}/>

                    </div>

                    <div className='form-group'>
                    <label htmlFor='total_amount'>TOTAL AMOUNT</label>
                    <input type='text' name='total_amount' className='form-control'value={this.state.total_amount} onChange={this.handleChange}/>
                    </div>

                    <div className='form-group'>
                    <label htmlFor='date'>TRANSACTION DATE</label>
                    <input type='text' default={Date.now()} className='form-control' onChange={this.handleChange}/>
                    
                    <input type='submit' class="btn btn-success"/>

                    </div>
                    
                    
                </form>

            </div>
        )

    }
}

const mapStateToProps=(state)=>{
    return {
        categories:state.categories,
        items:state.items
    }
}

export default connect(mapStateToProps)(NewOrder)
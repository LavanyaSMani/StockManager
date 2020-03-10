import React from 'react'
import {connect} from 'react-redux'

import {startNewPurchase} from '../../action/purcahseAction'

class NewOrder extends React.Component{
    constructor()
    {
        super()
        this.state={
            company_name:'',
            category_name:'',
            item:'',
            quantity:'',
            total_Amt:'',
            amt_paid:'',
            price_per_quantity:''
            
        }
    }
    handleSelect=(e)=>{
        console.log("the category value is",e.target.value)
        this.setState({category_name:e.target.value})
    }
    handleSelect2=(e)=>{
        console.log("th eitem data is ",e.target.value,this.state.category_name)
        this.setState({item:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            company_name:this.state.company_name,
            category:this.state.category_name,
            item:this.state.item,
            quantity:this.state.quantity,
            total_Amt:this.state.quantity*this.state.price_per_quantity,
            amt_paid:this.state.amt_paid,
            price_per_quantity:this.state.price_per_quantity

            
        }
        console.log("getting category",this.state.category,formdata)
        const redirect=()=>{this.props.history.push('/purchases')}
        this.props.dispatch(startNewPurchase(formdata))
       
        // redirect()
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render()
    {
        return (
            <div><br/><br/><br/>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='company_name'>COMPANY NAME</label>
                    <input type='text' name='company_name' value={this.state.company_name} onChange={this.handleChange}/><br/><br/>
                    <label>CATEGORY</label>
                    <select onChange={this.handleSelect}>
                        <option value=''></option>
                        {this.props.categories.map(category=>{
                            return <option value={category._id} name={category}>{category.category_name}</option>
                        })}
                    </select><br/><br/>
                    <label>ITEM</label>
                    <select onChange={this.handleSelect2}>
                        <option value=''></option>
                        {this.props.items.map(item=>{
                            return item.category._id===this.state.category? <option value={item._id} name={item}>{item.item_Name}</option>:''
                           
                        })}
                    </select><br/><br/>
                    <label htmlFor='quantity'>QUANTITY</label>
                    <input type='text' name='quantity' value={this.state.quantity} onChange={this.handleChange}/><br/><br/>
                    <label htmlFor='price_per_quantity'>PRICE PER QUANTITY</label>
                    <input type='text' name='price_per_quantity' value={this.state.price_per_quantity} onChange={this.handleChange}/><br/><br/>

                    <label htmlFor='amount_paid'>AMOUNT PAID</label>
                    <input type='text' name='amount_paid' value={this.state.amount_paid} onChange={this.handleChange}/><br/><br/>

                    <label htmlFor='total_Amt'>TOTAL AMOUNT</label>
                    <input type='text' name='total_Amt' defaultValue={this.state.quantity||this.state.price_per_quantity!=='undefined'?this.state.quantity*this.state.price_per_quantity:''}/><br/><br/>

                    <label htmlFor='date'>TRANSACTION DATE</label>
                    <input type='text' default={Date.now()} onChange={this.handleChange}/><br/><br/>
                   
                    
                    <input type='submit'/>
                    
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
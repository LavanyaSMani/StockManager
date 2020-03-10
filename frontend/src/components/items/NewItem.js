import React from 'react'
import {connect} from 'react-redux'
import {startNewItem} from '../../action/itemAction'

class NewCategory extends React.Component{
    constructor()
    {
        super()
        this.state={
            category_id:'',
            item_name:'',
            price_per_quantity:''
        }
    }

    handleChange=(e)=>{
        console.log("the selected item is",e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    handleoption=(e)=>{
        console.log("the seleted option is",e.target.value)
        this.setState({category_id:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            category:this.state.category_id,
            item_Name:this.state.item_name,
            price_per_quantity:this.state.price_per_quantity
        }
        console.log("sending from data",formdata)
        const redirect=this.props.history.push('/items')
        this.props.dispatch(startNewItem(formdata,redirect))
         
    }
    render()
    {
        return (
            <div>
                <h3>ENTER THE ITEM HERE</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <label>CATEGORIES</label>
                    <select onChange={this.handleoption} className='form-control'>
                        <option value=''></option>
                        {this.props.categories.map(category=>{
                            return <option value={category._id}>{category.category_name}</option>
                        })}
                    </select>

                    </div>

                    <div className='form-group'>
                    <label htmlFor='item_name'>ITEM NAME</label>
                    <input type='text' name='item_name' value={this.state.item_name}className='form-control' onChange={this.handleChange}/>
                    </div>
                    
                  <div className='form-group'>
                  <label htmlFor='price_per_quantity'>ITEM COST</label>
                    <input type='text' name='price_per_quantity' className='form-control' value={this.state.price_per_quantity} onChange={this.handleChange}/>
                    <br/><input type='submit' class="btn btn-success"/>

                  </div>
                    

                </form>

            </div>
        )
    }
}
const mapStateToPorps=(state)=>{
    return {
        categories:state.categories,
        items:state.items
    }
}


export default connect(mapStateToPorps)(NewCategory)
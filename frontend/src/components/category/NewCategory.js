import React from 'react'
import {connect} from 'react-redux'
import {startNewCategory} from '../../action/categoryAction'

class NewCategory extends React.Component{
    constructor()
    {
        super()
        this.state={
            category_name:''
        }
    }

    handleChange=(e)=>{
        this.setState({category_name:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            category_name:this.state.category_name
        }
        console.log("sending from data",formdata)
        const redirect=this.props.history.push('/categories')
        this.props.dispatch(startNewCategory(formdata,redirect))
         
    }
    render()
    {
        return (
            <div>
                <h3>ENTER THE CATEGORY HERE</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <label htmlFor='c_name'>CATEGORY NAME</label>
                    <input type='text' name='c_name' value={this.state.category_name} className='form-control' onChange={this.handleChange}/>
                    <input type='submit' class="btn btn-success"/>
                    </div>
                   
                    

                </form>

            </div>
        )
    }
}
const mapStateToPorps=(state)=>{
    return {
        categories:state.categories
    }
}


export default connect(mapStateToPorps)(NewCategory)
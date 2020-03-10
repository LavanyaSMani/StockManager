import React from 'react'
import {startRegister} from '../../action/userAction'
import {connect} from 'react-redux'

class Register extends React.Component{
    constructor()
    {
        super()
        this.state={
            name:'',
            password:''
           
        }
    }

    handleChange=(e)=>{
        console.log("setting the state values",e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            name:this.state.name,
            password:this.state.password
          
        }
        console.log(formdata)
        const redirect=()=>{this.props.history.push('/login')}
        this.props.dispatch(startRegister(formdata,redirect))
    }
    render()
    {
        console.log(React.version)
        return (
            <div>
                <h2>REGISTER HERE BEFORE USING THIS APP</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>ENTER YOUR NAME:--</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/><br/>
                   
                    <label htmlFor='password'>ENTER YOUR PASSWORD:--</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(Register)
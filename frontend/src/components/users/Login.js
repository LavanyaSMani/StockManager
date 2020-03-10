import React from 'react'
import {startLogin} from '../../action/userAction'
import {connect} from 'react-redux'


class Login extends React.Component{
    constructor()
    {
        super()
        this.state={
            name:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            name:this.state.name,
            password:this.state.password
        }
        const redirect=()=>{this.props.history.push('/')}
        this.props.dispatch(startLogin(formdata,redirect))

    }
    render()
    {
        return (
            <div>
                <h3>PLEASE LOGIN </h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>USER NAME</label>
                    <input type='name' name='name' value={this.state.email} onChange={this.handleChange}/><br/>
                    <label htmlFor='password'>USER PASSWORD</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}



export default connect()(Login)
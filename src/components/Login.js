import React, { Component } from 'react';
import UserNav from './User/UserNav';
import AdminNav from './Admin/AdminNav';

class AdminLogin extends Component {
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submit = this.submit.bind(this);
    }
    changeEmail(event){
        this.setState  ({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState  ({
            password:event.target.value
        })
    }
    submit(event){
        console.log("submiting");
        event.preventDefault(); 
        const registered = {
            email : this.state.email,
            password : this.state.password
        }
        sessionStorage.setItem('loginDetails',registered);
        if(this.state.email==="admin@gmail.com" && this.state.password==="admin111")
        {
            <AdminNav/>        
            window.location = '/adminNav';
        }
        else{            
            <UserNav/>
            window.location = '/userNav';
        }
    }
    render(){
        return (
            <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <h1>Login</h1>
                <form onSubmit={this.submit} method="post">
                    <input type="email" placeholder="Email" value={this.email} onChange={this.changeEmail}  size="60" style={{height: '30px'}}/><br/><br/> 
                    <input type="password" placeholder="Password" value={this.password} onChange={this.changePassword}  size="60" style={{height: '30px'}}/><br/><br/>
                    <button type="submit">Login</button><br/><br/>
                    <p>New User?<a href="/register">Sign Up</a> </p>
                </form>                    
            </div>
        );
    }
}
export default AdminLogin;

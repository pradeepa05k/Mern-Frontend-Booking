import React, { Component } from 'react';
import axios from 'axios';
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
        event.preventDefault(); 
        const registered = {
            email : this.state.email,
            password : this.state.password
        }
        sessionStorage.setItem('loginDetails',registered);
        axios.post("https://book-your-ticket.herokuapp.com/login", registered)
        .then((response) => {
            if(response ) {
                if(response.data !== "Invalid email or password"){
                    console.log(response);
                    if(this.state.email==="admin@gmail.com" && this.state.password==="admin111")
                    {
                        alert("You are Logged in as Admin!!",response.data);
                        <AdminNav/>        
                        window.location = '/adminNav';
                    }
                    else{
                        alert("Login Successfull!!",response.data);
                        <UserNav/>
                        window.location = '/userNav';
                    }
                } 
                else{
                    alert("Invalid Email or Password");
                    window.location = '/login';
                }
            }
            else{
                alert("Login Failed");
            }
        })
    }
    render(){
        return (
            <div className="mw5 mt5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <h1>Login</h1>
                <form onSubmit={this.submit} method="post">
                    <input type="email" placeholder="Email" required value={this.email} onChange={this.changeEmail}  size="60" style={{height: '30px'}}/><br/><br/> 
                    <input type="password" placeholder="Password" required value={this.password} onChange={this.changePassword}  size="60" style={{height: '30px'}}/><br/><br/>
                    <button type="submit">Login</button><br/><br/>
                    <p>New User?<a href="/register">Sign Up</a> </p>
                </form>                    
            </div>
        );
    }
}
export default AdminLogin;

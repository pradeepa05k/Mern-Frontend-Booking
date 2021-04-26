import React, { Component} from 'react';
import '../css/User.css';
import axios from 'axios';

class user extends Component{
    constructor(){
        super()
        this.state = {
            name : '',
            email : '',
            mobile : '',
            password : ''
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeMobileNumber = this.changeMobileNumber.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeName(event){
        this.setState  ({
            name:(event.target.value)
        })
    }
    changeEmail(event){
        this.setState  ({
            email:event.target.value
        })
    }
    changeMobileNumber(event){
        this.setState  ({
            mobile:event.target.value
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
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            password : this.state.password
        }
        console.log(registered);
        axios.post("http://book-your-ticket.herokuapp.com/user/insertUser", registered)
        .then((response) => {
            if(response) {
                alert("Registered Successfully!!!");
                window.location = '/login';
            }
            else{
                alert("Registered Failed");
            }
        })

        alert("You are submitting " + this.state.name);
    }

    render() {
        return(
            
            <div className = "container">
                <div className = "left">
                        <h1>Register to Book Ticket</h1>
                        <form onSubmit={this.submit} method="post">
                            <div className = "ip">
                                <input type="text" placeholder="Name" value={this.name} onChange={this.changeName} size="80" style={{height: '30px'}}/><br/><br/>
                                <input type="email" placeholder="Email" value={this.email} onChange={this.changeEmail}  size="60" style={{height: '30px'}}/><br/><br/> 
                                <input type="text" placeholder="Mobile number" value={this.mobile} onChange={this.changeMobileNumber}  size="60" style={{height: '30px'}}/><br/><br/>         
                                <input type="password" placeholder="Password" value={this.password} onChange={this.changePassword}  size="60" style={{height: '30px'}}/><br/><br/>
                                <button type="submit">Register</button><br/><br/>
                                <p>Already have an account?<a href="/login">Login</a></p>
                            </div>
                        </form>
                </div>                
            </div>
        );
    }
}
export default user;
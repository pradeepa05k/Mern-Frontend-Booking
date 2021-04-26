import axios from 'axios';
import React, { Component } from 'react';

class Reset extends Component{
    constructor(){
        super();
        this.state={
            seatStatus : ''
        }
        this.changeReset = this.changeReset.bind(this);
        this.submit = this.submit.bind(this);
    }
    changeReset(event){
        this.setState({
            seatStatus: event.target.value
        })
    }
    submit(event){
        event.preventDefault();
        const result = {
            seatStatus : this.state.seatStatus
        }
        axios.post("http://localhost:4000/seat/reset", result)
        .then((response) => {
            if(response) {
                alert("Reset Successfully!!!");
                window.location = '/seat';
            }
            else{
                alert("Reset Failed");
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Reset Page</h1>
                <h3>Reset to </h3>
                <input placeholder="open/close" onChange={this.changeReset} style={{height: '30px'}}></input><br/><br/>
                <button onClick={this.submit}>Reset</button>
            </div>
        );
    }
}
export default Reset;
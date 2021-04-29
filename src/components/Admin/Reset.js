import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        axios.post("https://book-your-ticket.herokuapp.com/seat/reset", result)
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
                <h1>Reset Tickets</h1>
                <form className="form-row align-items-center">
                    <div className="center">
                        <label className="my-1 mr-2" for="SelectPref">Reset</label><br/>
                        <select className="custom-select my-1 sm-3" id="SelectPref">
                            <option selected>Choose...</option>
                            <option value="1">open</option>
                            <option value="2">close</option>
                        </select><br/>
                        <button type="reset" className="btn btn-success">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Reset;
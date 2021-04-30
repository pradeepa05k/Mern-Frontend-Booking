import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Payment extends React.Component{
    render(){
        return(
            <div className="outer-body">
                <h1>Payment Details</h1>
                <form>                
                    <div className="form-group">
                        <label htmlFor="inputNumber">Card Number</label>
                        <input type="text" className="form-control" id="inputNumber" placeholder="Enter Your Card Number" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputName">Name on card</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter Your name on Card" required/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label htmlFor="inputMonth">Expiry Month</label>
                            <select id="inputMonth" className="form-control"  required>
                                <option>Jan</option>
                                <option>Feb</option>
                                <option>Mar</option>
                                <option>Apr</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>Aug</option>
                                <option>Sep</option>                       
                                <option>Oct</option>
                                <option>Nov</option>
                                <option>Dec</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputYear">Expiry Year</label>
                            <select id="inputYear" className="form-control"  required>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputCvv">Card CVV</label>
                            <input type="text" className="form-control" id="inputCvv"  required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <h2 style={{marginLeft:0, padding:'10px'}}>Amount : Rs.700</h2>
                    </div>
                    <button className="btn btn-primary" type="submit"><a href="/success">Pay Now</a></button>
                </form>
            </div>
        );
    }
}
export default Payment;
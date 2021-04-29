import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
const UserNav = () => {
    return(
        <div className="back">
            <ul>
                <li><a href="/selectSeat">Select Seat</a></li>
                <li><a href="/login">Logout</a></li>
            </ul>  
            <br/><br/>
            <h1>Welcome to Online Bus Ticket Booking</h1> 
            <table className="table ma4 mt0 mr7 pr2">
                <tr>
                    <td>Bus Name : </td>
                    <td>Sathya Travels</td>
                </tr>
                <tr>
                    <td>Bus Type : </td>
                    <td>A/c Sleeper</td>
                </tr>
                <tr>
                    <td>Route : </td>
                    <td>Coimbatore - Chennai</td>
                </tr>
                <tr>
                    <td>Bus Fare : </td>
                    <td>₹. 700</td>
                </tr>
                <tr>
                    <td><button className="btn btn-warning"><a href="/selectSeat">Select Seat</a></button></td>
                </tr>
            </table>      
        </div>
    );
}

export default UserNav;
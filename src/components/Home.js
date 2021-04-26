import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <div className="home">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Logout</a></li> 
            </ul> 
            <br/><br/>
            <h1>Welcome to Online Bus Ticket Booking</h1> 
            <table className="center table">
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
            </table>      
        </div>
    );
}

export default Home;
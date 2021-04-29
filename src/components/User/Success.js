import React from 'react';
class Success extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="success">
                    <i className="checkmark">✓</i>
                </div>
                <h1>Success</h1> 
                <p>Your Booking Confirmed<br/>Get Ready for the ride</p>
            </div>
        )
    }
}
export default Success;
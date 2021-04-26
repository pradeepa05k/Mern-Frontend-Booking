import React from 'react';
const AdminNav = () => {
    return(
        <div className="adm">            
            <ul>
                {/* <li><a href="/seat">View Seats</a></li> */}
                <li><a href="/open">Open Seat</a></li>
                <li><a href="/close">Closed Seat</a></li>
                <li><a href="/reset">Reset</a></li>
                <li><a href="/bookedseats">Booked Seat</a></li>
                <li><a href="/login">Logout</a></li>
            </ul>        
        </div>
    );
}

export default AdminNav;
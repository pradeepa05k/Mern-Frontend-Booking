import React from 'react';
const UserNav = () => {
    return(
        <div className="back">
            <ul>
                <li><a href="/open">Open Seats</a></li>
                <li><a href="/seatlist">Book Seat</a></li>
                <li><a href="/login">Logout</a></li>
            </ul>        
        </div>
    );
}

export default UserNav;
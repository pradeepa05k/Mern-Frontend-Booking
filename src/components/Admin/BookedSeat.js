import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookedSeat() {
    const [user, setUser] = useState([]);
    const [Loading, setLoading] = useState(false);


    useEffect(() => {
        axios.get(`https://book-your-ticket.herokuapp.com/passengerDetails`)
        .then((response) => {
            console.log(response.data);
            setUser(response.data);
            setLoading(true);
        })
    },[])

    if(Loading){
        return (
            <div>
                <h3 style={{marginLeft :'40%', marginBottom : '50px'}}>Booked By</h3>
                {
                user.map((value) => {
                    return(
                        <div className="out">
                            <div className="row">
                                <h6 className="col">Name</h6>
                                <p className="col">{value.name} </p>
                            </div>
                            <div className="row">
                                <h6 className="col">Age</h6>
                                <p className="col">{value.age} </p>
                            </div>
                            <div className="row">
                                <h6 className="col">Mobile Number</h6>
                                <p className="col">{value.mobile} </p>
                            </div>
                            <div className="row">
                                <h6 className="col">Source</h6>
                                <p className="col">{value.source} </p>
                            </div>
                            <div className="row">
                                <h6 className="col">Destination</h6>
                                <p className="col">{value.destination} </p>
                            </div>
                        </div>
                    );                        
                })
            }
            </div>              
        );
    }
    else{
        return(
            <div></div>
        )
    }  
}


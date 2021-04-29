import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router";

export default function SeatBookedPerson() {
    const [user, setUser] = useState([]);
    let {id} = useParams();


    useEffect(() => {
        console.log("Coming");
        axios.get(`http://localhost:4000/bookingDetail/${id}`)
        .then((response) => {
            console.log(response.data);
            setUser(response.data);
        })
    },[])

    return (
        <div>
            {
                user.map((value) => {
                    return(
                        <div className="out">
                            <h3 style={{marginLeft :'80px', marginBottom : '50px'}}>Booked By</h3>
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


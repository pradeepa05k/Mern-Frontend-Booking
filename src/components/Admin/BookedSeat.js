import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookedSeat() {
    const [user, setUser] = useState([]);
    const [Loading, setLoading] = useState(false);


    useEffect(() => {
        axios.get(`http://book-your-ticket.herokuapp.com/passengerDetails`)
        .then((response) => {
            console.log(response.data);
            setUser(response.data);
            setLoading(true);
        })
    },[])

    if(Loading){
        return (
            <div>              
            <table className="center table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Mobile</th>
                <th scope="col">Source</th>
                <th scope="col">Destination</th>
                </tr>
            </thead>
              {
              user.map((value,key) => {
                  console.log(value,key)
                  return(
                        <div>
                            <tbody>
                            <tr>
                              <td>{value.name}</td>
                              <td>{value.age}</td>
                              <td>{value.mobile}</td>
                              <td>{value.source}</td>
                              <td>{value.destination}</td>
                            </tr>      
                            </tbody>
                        </div>
                  );
              })}
            </table>
            </div>
                                              
          );
    }
    else{
        return(
            <div>Nothing Returned</div>
        )
    }  
}


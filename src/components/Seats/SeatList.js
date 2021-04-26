import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SeatList() {
    const [seat, setSeat] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:4000/seat/getSeats`)
        .then((response) => {
            console.log(response.data);
            const s=setSeat(response.data);
            console.log(s);
            setLoading(true);
        })
    },[])

    if(Loading){
        return (
            <div>              
              {
              seat.map((value,key) => {
                  console.log(value,key)
                  return(
                      <div className="table col-span-5">
                          <tr>
                              <td><a className="f6 link dim ph3 pv2 mb2 dib white bg-blue" href={`/bookseat/${value._id}`}>{value.seatNo}</a></td>
                          </tr>                          
                      </div>
                  );
              })}
            </div>
          );
    }
    else{
        return(
            <div>Nothing Returned</div>
        )
    }  
}
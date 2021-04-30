import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SelectSeat() {
    const [seat, setSeat] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://book-your-ticket.herokuapp.com/seat/getSeats`)
        .then((response) => {
            setSeat(response.data);
            setLoading(true);
        })
    },[])

    if(Loading){
        return (
            <div className="bg-light-grey dib br3 ma2 pa3 bw2 shadow-5"
            style={{width: "300px",marginTop:"5%", marginLeft: "35%",border: "1px solid #ced4da"}}>              
            <h2>View Seats</h2>
              {
              seat.map((value) => {
                  if(value.seatStatus==="open"){
                    return(
                        <button className="bg-green dib ma2 pa3" style={{ padding: "5px", width: "50px"}}><a href={`/bookseat/${value._id}`}>{value.seatNo}</a></button>
                    );
                  }
                  else{
                    return(
                        <button className="bg-red dib ma2 pa3" style={{ padding: "5px", width: "50px"}} disabled>{value.seatNo}</button>
                    );
                  }
              })}
            </div>
          );
    }
    else{
      return(
        <div></div>
      )
    }
}
import React, {Component} from 'react';
import axios from 'axios';

class Close extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            seats : [],
        }
        
    }
    componentDidMount() {
        axios.get(`https://book-your-ticket.herokuapp.com/seat/close`)
          .then(res => {
            const seat = res.data;
            console.log(res.data);
            this.setState({ seats:seat  });
          })
    }
    render() {
        return (   
            <div className="bg-light-grey dib br3 ma2 pa3 bw2 shadow-5" style={{width: "300px",marginTop:"5%", marginLeft: "35%",border: "1px solid #ced4da"}}>
                <h2>Closed Seats</h2>
                {
                    this.state.seats.map((value) => {
                        return(
                            <button className="bg-red dib ma2 pa3" disabled style={{ padding: "5px", width: "50px"}}><a href={`/bookedPassenger/${value._id}`}>{value.seatNo}</a></button>
                        );
                    })
                }        
            </div>     
        ); 
    }
}
export default Close;
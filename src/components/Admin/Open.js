import React, {Component} from 'react';
import 'tachyons';
import axios from 'axios';

class Open extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            seats : [],
        }
        
    }
    componentDidMount() {
        axios.get(`https://book-your-ticket.herokuapp.com/seat/open`)
          .then(res => {
            const seat = res.data;
            console.log(res.data);
            this.setState({ seats:seat  });
          })
    }
    
    render() {
        return (   
            <div className="bg-light-grey dib br3 ma2 pa3 bw2 shadow-5" style={{width: "300px",marginTop:"5%", marginLeft: "35%",border: "1px solid #ced4da"}}>
                <h2>Open Seats</h2>
                {
                    this.state.seats.map((value) => {
                        return(
                            <button className="bg-blue dib ma2 pa3" style={{ padding: "5px", width: "50px"}}><a href={`/bookseat/${value._id}`}>{value.seatNo}</a></button>
                        );
                    })
                }        
            </div>     
        ); 
    }
}
export default Open;
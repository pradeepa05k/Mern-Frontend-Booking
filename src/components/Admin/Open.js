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
            this.state.seats.map((object) => {
            return(
                <div className="card-body">
                    <table>
                    <tbody>                        
                        <tr>
                            <td className="f6 link dim ph3 pv2 mb2 dib white bg-dark-pink">{object.seatNo}</td>
                            <td className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green">{object.seatStatus}</td>                            
                            <td className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green">{object.seatDescription}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            );
            })            
        ); 
    }
}
export default Open;
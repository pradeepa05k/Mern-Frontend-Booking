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
        axios.get(`http://book-your-ticket.herokuapp.com/seat/close`)
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
                <div className="center">
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
export default Close;
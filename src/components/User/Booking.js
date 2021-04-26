import React from 'react';
import '../../css/PassengerDetails.css';
import axios from 'axios';

class PassengerDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            mobile : '',
            age : '',
            gender : '',
            source : '',
            destination : '',
            travelDate : '',
            seatId : '',
            seats : []
        }
        this.changePassengerName = this.changePassengerName.bind(this);
        this.changeMobileNumber = this.changeMobileNumber.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeFrom = this.changeFrom.bind(this);
        this.changeTo = this.changeTo.bind(this);
        this.changeTravelDate = this.changeTravelDate.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    
    changePassengerName(event){
        this.setState  ({
            name:(event.target.value)
        })
        console.log(this.state.name);
    }
    changeMobileNumber(event){
        this.setState  ({
            mobile:(event.target.value)
        })
    }
    changeAge(event){
        this.setState  ({
            age:(event.target.value)
        })
    }
    changeGender(event){
        this.setState  ({
            gender:(event.target.value)
        })
    }
    changeFrom(event){
        this.setState  ({
            source:(event.target.value)
        })
    }
    changeTo(event){
        this.setState  ({
            destination:(event.target.value)
        })
    }
    changeTravelDate(event){
        this.setState  ({
            travelDate:(event.target.value)
        })
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/seat/getSeats`)
          .then(res => {
            const seat = res.data;
            console.log(res.data);
            this.setState({ seats:seat  });
            console.log(this.state.seats)
        })
    } 
    submit(event){
        console.log("submiting");
        event.preventDefault(); 
        const registered = {
            name : this.state.name,
            mobile : this.state.mobile,
            age : this.state.age,
            gender : this.state.gender,
            source : this.state.source,
            destination : this.state.destination,
            travelDate : this.state.travelDate,
            seatId : this.props.match.params.id
        }
        console.log(registered);
        axios.post("http://localhost:4000/bookSeat", registered)
        .then((response) => {
            if(response) {
                alert("Booking Successfull!!");
                window.location = '/userNav';
            }
            else{
                alert("Registered Failed");
            }
        })

        // alert("You are submitting " + this.state.name);
    }

        render(){
                return (
                <div className="content">
                <h1>Booking</h1>
                <form onSubmit={this.submit} method="post">
                    <input type="text" placeholder="Passenger Name" value={this.name} onChange={this.changePassengerName} size="80" style={{height: '30px'}}/><br/><br/>
                    <input type="tel" placeholder="Mobile Number"  value={this.mobile} onChange={this.changeMobileNumber}size="80" style={{height: '30px'}}/><br/><br/>
                    <input type="text" placeholder="Age" size="80" value={this.age} onChange={this.changeAge}style={{height: '30px'}}/><br/><br/>
                    <input type="text" placeholder="Gender" size="80" value={this.gender} onChange={this.changeGender}style={{height: '30px'}}/><br/><br/> 
                    <input type="text" placeholder="Travel From"value={this.source} onChange={this.changeFrom} size="80" style={{height: '30px'}}/><br/><br/>
                    <input type="text" placeholder="Travel To" value={this.destination} onChange={this.changeTo}size="80" style={{height: '30px'}}/><br/><br/> 
                    <label htmlFor="tdate">Travel Date :  </label>
                    <input id="tdate" type="date" size="80" value={this.travelDate} onChange={this.changeTravelDate} style={{height: '30px'}}/><br/><br/>
                    <button type="submit" >Book My Ticket</button>
                </form>
                </div>
                );
}
}
export default PassengerDetails;
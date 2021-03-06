import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PassengerDetails from './components/User/Booking';
import Home from './components/Home';
import user from './components/SignUp';
import './css/Home.css';
import './css/SignUp.css';
import './css/PassengerDetails.css';
import AdminLogin from "./components/Login";
import SeatList from './components/Admin/SeatList';
import Reset from './components/Admin/Reset';
import AdminNav from "./components/Admin/AdminNav";
import Open from "./components/Admin/Open";
import Close from "./components/Admin/Close";
import UserNav from "./components/User/UserNav";
import BookedSeat from "./components/Admin/BookedSeat";
import Payment from "./components/User/Payment";
import Success from "./components/User/Success";
import SeatBookedPerson from "./components/Admin/SeatBookedPerson";
import SelectSeat from "./components/User/SelectSeat";
class App extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/seatlist" component={SeatList}></Route>
                    <Route path="/selectSeat" component={SelectSeat}></Route>
                    <Route path="/reset" component={Reset}></Route>
                    <Route path="/register" component={user}></Route>
                    <Route path="/open" component={Open}></Route>
                    <Route path="/close" component={Close}></Route>
                    <Route path="/bookseat/:id" component ={PassengerDetails}></Route>
                    <Route path="/adminNav" component={AdminNav}></Route>
                    <Route path="/userNav" component={UserNav}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/bookedseats" component={BookedSeat}></Route>
                    <Route path="/login" component={AdminLogin}></Route>
                    <Route path="/payment" component={Payment}></Route>
                    <Route path="/success" component={Success}></Route>
                    <Route path="/bookedPassenger/:id" component={SeatBookedPerson}></Route>
                </Switch>
            </Router>
        );
        
    }
}
export default App;
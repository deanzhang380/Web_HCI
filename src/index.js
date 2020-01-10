import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './General/User/Profile/profile';
import Random from './Home/Random/random';
import Schedure from './General/User/Schedure/schedure';
import HomePage from './Page/HomePage'
import Room from './General/Rooms/room'
import Payment from './General/Rooms/payMent/pay_ment'
import Accept from './General/Rooms/Accept/accept'
import Transaction from './General/Rooms/SucessfulTransaction/transaction'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confirm from './General/Rooms/Confirm/confirm';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/home" component={HomePage} />
            <Route path="/home/profile" component={Profile} />
            <Route path="/home/random" component={Random} />
            <Route path="/home/schedure" component={Schedure} />
            <Route path="/rooms" component={Room} />
            <Route path="/rooms/payment" component={Payment} />
            <Route path="/rooms/accept" component={Accept} />
            <Route path="/rooms/confirm" component={Confirm} />
            <Route path="/rooms/transaction" component={Transaction} />

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

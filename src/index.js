import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './General/User/Profile/profile';
import Random from './Home/Random/random';
import Schedure from './General/User/Schedure/schedure';
import HomePage from './Page/HomePage'
import Room from './Page/room'
import Payment from './General/Rooms/payMent/pay_ment'
import Accept from './General/Rooms/Accept/accept'
import Transaction from './General/Rooms/SucessfulTransaction/transaction'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confirm from './General/Rooms/Confirm/confirm';
import Room_book from './Page/room_book'
import { useMediaQuery } from 'react-responsive'
import Random_res from './Responsive/Random/random'
import HomeMobile from './Responsive/Page/Home_mobile'
import Profile_res from './Responsive/Profile/profile';
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const routing = (
    <Router>
        <div>

            <Desktop>
                <Route path="/" component={App} />
                <Route path="/home" component={HomePage} />
                <Route path="/home/profile" component={Profile} />
                <Route path="/home/random" component={Random} />
                <Route path="/home/schedure" component={Schedure} />
                <Route path="/rooms" component={Room} />
                <Route path="/rooms_book/payment" component={Payment} />
                <Route path="/rooms_book/accept" component={Accept} />
                <Route path="/rooms_book/confirm" component={Confirm} />
                <Route path="/rooms_book/transaction" component={Transaction} />

                <Route path="/rooms_book" component={Room_book} />
            </Desktop>
            <Mobile>
                <Route path="/home" component={HomeMobile} />
                <Route path="/home/random" component={Random_res} />
                <Route path="/home/profile" component={Profile_res} />
                 <Route path="/rooms_book/payment" component={Payment} />
                <Route path="/rooms_book/accept" component={Accept} />
                <Route path="/rooms_book/confirm" component={Confirm} />
                <Route path="/rooms" component={Room} />
                <Route path="/rooms_book" component={Room_book} />
                <Route path="/home/schedure" component={Schedure} />
            </Mobile>

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

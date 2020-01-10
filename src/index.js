import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './General/User/Profile/profile';
import Random from './Home/Random/random';
import Schedure from './General/User/Schedure/schedure';
import Main from './Main/main';
import HomePage from './Page/HomePage'
import Room from './General/Rooms/room'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/home" component={HomePage} />
            <Route path="/home/profile" component={Profile} />
            <Route path="/home/random" component={Random} />
            <Route path="/home/schedure" component={Schedure} />
            <Route path="/rooms" component={Room} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

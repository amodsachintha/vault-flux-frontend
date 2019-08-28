import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './js/containers/AppContainer';
import Login from './js/views/Login';
import Health from './js/views/DiskHealth';
import Signup from './js/views/Signup';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/home" exact component={localStorage.getItem('token') ? AppContainer : Redirect}/>
                <Route path="/health" exact component={Health}/>
                <Route path="/signup" exact component={Signup}/>
            </div>
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} autoClose={5000}/>
        </Router>
    );
};

ReactDOM.render(<Main/>, document.getElementById('root'));
import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from './Components/login.jsx';
import './App.css';
import Register from './Components/register.jsx';
import ForgotPwd from './Components/forgotPwd.jsx'
import ResetPwd from './Components/resetPwd.jsx'
import DashBoard from './Components/dashboard.jsx'
class App extends Component {
  render() {
    return (
    <Router>
      <Route path="/login" component={Login}></Route>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/forgotpwd" component={ForgotPwd}></Route>
      <Route path="/resetpwd" component={ResetPwd}></Route>
      <Route path="/dashboard" component={DashBoard}></Route>
    </Router>
    );
  }
}

export default App;

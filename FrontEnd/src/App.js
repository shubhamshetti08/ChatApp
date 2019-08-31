import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from './Pages/login.jsx';
import './App.css';
import Register from './Pages/register.jsx';
import ForgotPwd from './Pages/forgotPwd.jsx'
import ResetPwd from './Pages/resetPwd.jsx'
import Dashboard from './Components/dashboard'
class App extends Component {
  render() {
    return (
    <Router>
      <Route path="/login" component={Login}></Route>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/forgotpwd" component={ForgotPwd}></Route>
      <Route path="/resetpwd" component={ResetPwd}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </Router>
    );
  }
}

export default App;

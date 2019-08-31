import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  handleRegisterClick=()=>{
    this.props.history.push('/register');
  }
  handleForgotClick=()=>{
    this.props.history.push('/forgotpwd');
  }
  onChangeEmail=(e)=>{
    var Email=e.target.value;
    this.setState({
      email:Email
    })
  }
  onChangePassword=(e)=>{
    var Password=e.target.value;
    this.setState({
      password:Password
    })
  }
  render() {
    return (
      <Card className="lcard">
      <form className="login">
          <h1>Login Page</h1>
          <div>
          <img src={require('../assets/images/download.png')} />
          </div>
          <div>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <TextField
              id="outlined-pass-input"
              label="Password"
              type="password"
              name="password"
              margin="normal"
              variant="outlined"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div>
            <Button onClick={this.handleClick} variant="contained" color="primary">
              Login
            </Button>
          </div>
          <div className='cbutton'>
            <Button  onClick={this.handleRegisterClick} variant="contained" style={{backgroundColor:"#80deea"}}>
              Create Account
            </Button >
            <Button onClick={this.handleForgotClick} color='secondary' >
        Forgot Password??
      </Button>
          </div>
       
      </form >
      </Card>
    );
  }
}

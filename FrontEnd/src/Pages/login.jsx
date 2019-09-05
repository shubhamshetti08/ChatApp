import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Controller from '../Controller/userController';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      snackbarOpen: false,
      snackbarMsg: ''
    }
  }
  snackbarClose = (e) => {
    this.setState({ snackbarOpen: false });
  }
  handleClick = () => {
    console.log(this.state.email.length)
    console.log(this.state.password)
    if (this.state.email === "") {
      this.setState({ snackbarOpen: true, snackbarMsg: "email cannot be empty" })
    } else if (this.state.password === null || this.state.password.length < 8) {
      this.setState({ snackbarOpen: true, snackbarMsg: "password should be min 8" })
    } else {
      Controller.login(this.state.email, this.state.password);
      localStorage.setItem('Sender', this.state.email);
      // this.setState({ snackbarOpen: true, snackbarMsg: "login successfull" })
      this.props.history.push('/dashboard');
    }
  }
  handleRegisterClick = () => {
    this.props.history.push('/register');
  }
  handleForgotClick = () => {
    this.props.history.push('/forgotpwd');
  }
  onChangeEmail = (e) => {
    var Email = e.target.value;
    this.setState({
      email: Email
    })
  }
  onChangePassword = (e) => {
    var Password = e.target.value;
    this.setState({
      password: Password
    })
  }
  render() {
    return (
      <Card className="lcard">
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            >
            </IconButton>
            <Typography variant="h6" color="inherit">
              WELCOME TO LOGIN PAGE
            </Typography>
          </Toolbar>
        </AppBar>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
          message={<span id="messege-id">{this.state.snackbarMsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            >
            </IconButton>
          ]}
        />
        <form className="login">
          <h1>Login Page</h1>
          <div>
            <img src={require('../assets/images/download.png')} alt={'img'} />
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
              required
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
            <Button onClick={this.handleRegisterClick} variant="contained" style={{ backgroundColor: "#80deea" }}>
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

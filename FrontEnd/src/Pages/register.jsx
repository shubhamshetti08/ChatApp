import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import Controller from '../Controller/userController'
import '../App.css'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      snackbarOpen: false,
      snackbarMsg: '',
      
    }
  }
  snackbarClose = (e) => {
    this.setState({ snackbarOpen: false });
  }
  handleSubmit = () => {
    console.log(this.state.firstName)
    if (this.state.firstName === null || this.state.firstName.length < 1) {
      //alert("name cant be lesser then  5")
      this.setState({ snackbarOpen: true,snackbarMsg:"fistname cannot be empty" })
    }else if (this.state.lastName === null || this.state.lastName.length < 1) {
      this.setState({ snackbarOpen: true,snackbarMsg:"lastname cannot be empty"  })
    }else if(this.state.email === null || this.state.email.length < 1) {
      this.setState({ snackbarOpen: true,snackbarMsg:"email cannot be empty"  })
    }else if(this.state.password === null || this.state.password.length < 8) {
      this.setState({ snackbarOpen: true,snackbarMsg:"password should be min 8"  })
    }
    else {
      Controller.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
      this.setState({ snackbarOpen: true,snackbarMsg:"successfully registered"  })
    }

  }

  handleClick = () => {
    //let name=this.state.firstname;
    //console.log(name,"name");

    this.props.history.push('/login');
  }
  onChangeFirstName = (e) => {
    //this.setState({ [e.target.name]: e.target.value });
    var firstName = e.target.value;
    this.setState({
      firstName: firstName
    })
  }
  onChangeLastName = (e) => {
    var LastName = e.target.value;
    this.setState({
      lastName: LastName
    })
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
      <form className="register">
        <Card className="card">
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={this.state.snackbarOpen}
            autoHideDuration={6000}
            onClose={this.snackbarClose}
            message={<span id="messege-id"> {this.state.snackbarMsg}</span>}
            action={[
              <IconButton
                key="close"
                arial-label="close"
                color='inherit'
                onClick={this.snackbarClose}
              >
              </IconButton>
            ]}
          />
          <h1>Registration</h1>
          <div>
            <TextField
              id="firstName"
              label="FirstName"
              type="text"
              margin="normal"
              variant="outlined"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div>
            <TextField
              id="laststName"
              label="lastName"
              type="text"
              name="lastName"
              margin="normal"
              variant="outlined"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
            />
          </div>
          <div>
            <TextField
              id="email"
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
              id="password"
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
              login
            </Button>
            <Button onClick={this.handleSubmit} variant="contained" color="primary">
              submit
            </Button>
          </div>
        </Card>
      </form >
    );
  }
}

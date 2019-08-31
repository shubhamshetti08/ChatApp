import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import '../App.css'
import userLogin from '../Services/userService';
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        firstname:'',
        lastname:'',
        email:'',
        password:''
    }
  }
  handleSubmit=()=>{
    userLogin(data){
      var login={
        
      }
    }
  }
  handleClick=()=>{
   //let name=this.state.firstname;
   //console.log(name,"name");
   
    this.props.history.push('/login');
  }
  onChangeFirstName=(e)=>{  
    //this.setState({ [e.target.name]: e.target.value })
    var firstName=e.target.value;
    this.setState({
        firstname:firstName
    })
  }
  onChangeLastName=(e)=>{
      var LastName=e.target.value;
      this.setState({
          lastname:LastName
      })
  }
  onChangeEmail=(e)=>{
      var  Email=e.target.value;
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
      <form className="register">
        <Card className="card">
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
              label="LastName"
              type="text"
              name="lastname"
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
              submit
            </Button>
          </div>
        </Card>
      </form >
    );
  }
}

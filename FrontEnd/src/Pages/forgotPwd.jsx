import React from 'react';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Controller from '../Controller/userController';
export default class ForgotPwd extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        email:''
    }
  }
  handleClick=()=>{
    Controller.forgotPwd(this.state.email);
  }
  onChangeEmail=(e)=>{
    var  Email=e.target.value;
    this.setState({
        email:Email
    })
}
  render() {
    return (
      <form className="forgotpwd">
        <Card className="card">
          <h1 className="forgotpwd_head">Enter email</h1>         
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
            <Button onClick={this.handleClick} variant="contained" style={{color:"#212121" , backgroundColor:"#9fa8da"}}>
              Submit
            </Button>
          </div>
        </Card>
      </form >
    );
  }
}

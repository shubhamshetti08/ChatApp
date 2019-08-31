import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
export default class ResetPwd extends React.Component{
constructor(props){
    super(props);
    this.state={
        password:'',
        confirmpassword:''
    }

}
snackbarClose=(e)=>{
  this.setState({snackbarOpen:false});
}
handleClick=()=>{
    this.props.history.push('/eno')
}
render(){
    return(
        <Card className="rcard">
          <h1>RESET PASSWORD </h1>
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
        <TextField
          id="password"
          label="ConfirmPassword"
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
          value={this.state.confirmPassword}
          onChange={this.onChangeConfirmPassword}
        />
      </div>
        <div>
        <Button onClick={this.handleClick} variant="contained" color="primary">
          ResetPassword
        </Button>
        </div>
        </Card>
    );
}
}

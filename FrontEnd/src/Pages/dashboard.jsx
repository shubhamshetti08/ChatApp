import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import Controller from '../Controller/userController';
import io from 'socket.io-client';
const socket=io.connect('http://localhost:4000');
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
export default class Dashboard extends React.Component{
 // export default function Dashboard (props){
    constructor(props){
      super(props);
        this.state={
          loginUsers:[],
          email:'',
          msg:'',
          sender:'',
          receiver:''
        }
    }

    componentDidMount(){
      Controller.getAllUseres()
      .then((result)=>{
        this.setState({
          loginUsers:result
        })
        console.log("result-------",result);
      }).catch((err)=>{
        console.log("errrr",err); 
      })
    }
 
//  handleRadio=(e)=>{
//   var firstName = e.target.value;
//   this.setState({
//    firstName:firstName
//   })
  
//  }
 handleMsg=(e)=>{
  var msg = e.target.value;
  this.setState({
   msg:msg
  })
 }
 handleLogout=()=>{
   this.props.history.push('/login');
 }
 handleMenuClick=(e)=>{
var receiver=e.target.textContent;
this.setState({
  receiver:receiver
})
 }
 handleSend=()=>{
    var Sender=localStorage.getItem('Sender');
    this.setState({
    Sender:Sender
    })
    var data={
    SenderId:Sender,
    Message:this.state.msg
    }
    socket.emit('NewMessage',data);
    this.setState({
    msg:''
    })
    }
 
 
 render(){

  const onlineUsers = this.state.loginUsers.map((key) => {
    if (key.firstName !== localStorage.getItem('Sender')) {
         return (
      //   <div>
      // <FormControl component="fieldset" >
      //   <FormLabel component="legend"></FormLabel>
      //   <RadioGroup    
      //     name="users"
      //     value="disabled"
      //     onChange={this.handleRadio}
      //   >
      //     <FormControlLabel value={this.state.firstName} control={<Radio />} label={key.firstName} onClick={this.handleRadio} />
      //   </RadioGroup>
      // </FormControl>
      //       </div>
      <div>
        <MenuItem onClick={this.handleMenuClick}>{key.firstName}</MenuItem>
      </div>
        )
    }
    else {
        return true;
    }
})

        return(
            <Card>

                 <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" color="inherit">
            <h4><strong>WELCOME TO CHAT APP</strong></h4>
            </Typography>
            <Button style={{marginLeft:'900px'}}className="logout"color="inherit" onClick={this.handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
        <div>
          <Card className="dcard">
            {onlineUsers}
          </Card>
          <Card className="mcard">
            {localStorage.getItem('Sender')}
          </Card>
        </div>
        <div className="messege">
        <TextField 
        id="outlined-multiline-flexible"
        label="messege"
        multiline
        fullWidth
        rowsMax="15"
        margin="normal"
        helperText="messege"
        variant="outlined"
        onChange={this.handleMsg}
      />
      <Button onClick={this.handleSend} variant="contained" color="primary">
              send            
            </Button>      
            </div>           
            </Card>
           
        )
    }
}

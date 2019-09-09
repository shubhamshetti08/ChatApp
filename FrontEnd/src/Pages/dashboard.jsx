import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import Controller from '../Controller/userController';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');
 import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { RadioButton } from 'material-ui';
export default class Dashboard extends React.Component {
  // export default function Dashboard (props){
  constructor(props) {
    super(props);
    this.state = {
      loginUsers: [],
      //msgArr: [],
      message: [],
      email: '',
      msg: '',
      Sender: '',
      Receiver: '',
      msgDisplay: ''
    }
  }
  componentDidMount() {
    Controller.getAllUseres()
      .then((result) => {
        this.setState({
          loginUsers: result
        })
        console.log("result-------", result);
      }).catch((err) => {
        console.log("errrr", err);
      })
    Controller.getUserMsg()
      .then((results) => {
        this.setState({
          message: results
        })
        console.log("all messages-------", results);
      }).catch((err) => {
        console.log("errrr", err);
      })
    socket.on('Message', (result) => {
      const message = this.state.message;
      message.push(result);
      this.setState({ message: message });
    })
  }
  handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSend(e);
    }
  }
  handleMsg = (e) => {
    var msg = e.target.value;
    console.log("msg-----------", msg);
    this.setState({
      msg: msg
    })
  }
  handleLogout = () => {
    this.props.history.push('/login');
  }
  handleMenuClick = (e) => {
    var newColor = this.state.color ==='' ? 'burlywood' : '';
    this.setState({ color : newColor})
    var Receiver = e.target.textContent;
    console.log("rec-------", Receiver);
    this.setState({
      Receiver: Receiver
    })
  }
  handleSend = () => {
    var Sender = localStorage.getItem('Sender');
    this.setState({
      Sender: Sender
    })
    var data = {
      sender: Sender,
      receiver: this.state.Receiver,
      message: this.state.msg
    }
    console.log('---------------', data)
    socket.emit('NewMessage', data);
    this.setState({
      msg: '',
      anchorEl: null
    })
  }
  render() {
    // const msgArray = this.state.msgArr.map((key) => {
    //   return (
    //     <div>
    //       {
    //         key.sender === localStorage.getItem('Sender') ?
    //           (
    //             key.sender === this.state.Receiver ?
    //               (<div className="ReceiverSide">
    //                 {/* {key.sender} */}
    //                 {key.message}
    //               </div>)
    //               : (null)
    //           )
    //           : (null)
    //       }
    //       {
    //         (key.sender === this.state.Receiver ?
    //           (<div className="SenderSide">
    //             {/* {key.sender} */}
    //             {key.message}
    //           </div>) : (null))
    //       }
    //     </div>
    //   )
    // })
    const onlineUsers = this.state.loginUsers.map((key) => {
      if (key.email !== localStorage.getItem('Sender')) {
        return (
          <div>
            {/* <MenuItem style={{background:this.state.color}} onClick={this.handleMenuClick}>{key.firstName}</MenuItem> */}
            <RadioButton style={{background:this.state.color}} onClick={this.handleMenuClick}>{key.firstName}</RadioButton> 
          </div>
        )
      }
      else {
        return true;
      }
    })
    var msgDisplay = this.state.message.map((key) => {
      const s = localStorage.getItem('Sender');
      // console.log(key);
      return (
        // <div>
        //   {
        //     key.sender === this.state.Sender ?
        //       (<div >
        //         <div class='senderside'>
        //         {key.sender}
        //         {key.message}</div>
        //       </div>) :
        //       (<div>
        //         <div class='receiverside'>
        //         {key.sender}
        //         {key.message}
        //         </div>
        //       </div>)
        //   }
        // </div>
        <div>
          {
            key.sender === s ?
              (<div className="ReceiverSide">
                <div>{key.message}</div>
              </div>)
              : <div className='SenderSide'>
                <div> {key.message}</div>
              </div>
          }
        </div>
      )
    })
    return (
      <Card>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <h4><strong>WELCOME TO CHAT APP</strong></h4>
            </Typography>
            <Button style={{ marginLeft: '900px' }} className="logout" color="inherit" onClick={this.handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
        <div>
          <Card className="dcard">
            {onlineUsers}
          </Card>
        </div>
        <div>
          <Card className="mcard">
            {localStorage.getItem('Sender')}
            {/* <div>{msgArray}</div> */}
            <div>{msgDisplay}</div>
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
            value={this.state.msg}
            helperText="messege"
            variant="outlined"
            onChange={this.handleMsg}
            onKeyPress={this.handleEnter}
          />
          <Button onClick={this.handleSend} variant="contained" color="primary">
            send
            </Button>
        </div>
      </Card>
    )
  }
}

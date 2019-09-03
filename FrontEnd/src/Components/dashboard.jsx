import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
export default class Dashboard extends React.Component{
 // export default function Dashboard (props){
    render(){
        return(
            <Card>
            
                 <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" color="inherit">
            <h4><strong>WELCOME TO CHAT APP</strong></h4>
            </Typography>
            <Button className="logout"color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <div>
          <Card className="dcard">
            hello
          </Card>
          <Card className="mcard">
            hello
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
      />
      <Button onClick={this.handleClick} variant="contained" color="primary">
              send
              
            </Button>
       
            </div>
            
            </Card>
           
        )
    }
}

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            open:false,
        }
    }


    componentDidMount(){
        console.log("login mounted")
    }

    submit(){
        if(this.state.username == "" || this.state.password ==""){
            this.setState({open:true});
        }
        console.log(this.state);
    }

    changeState(e){
        switch(e.target.id){
            case "username":
                this.setState({username:e.target.value});
                break;
            case "password":
                this.setState({password:e.target.value});
                break;
            default:
                break;
        }
    }
    handleClose= () => {
        this.setState({ open: false });
      };
    

    render(){
        return(
            <div>

                <Card>

                    <CardContent>
                        <div style={{paddingTop:"2.5%",paddingLeft:"2.5%"}}>
                            <Typography component="h2" variant="display3" gutterBottom>
                                Login:
                            </Typography>
                        </div>
                        <div style={{padding:"2.5%"}}>
                            <TextField
                                id="username"
                                label="Username:"
                                value={this.state.username}
                                onChange={this.changeState.bind(this)}
                                fullWidth="true"
                                variant="outlined"
                                placeholder="Place your user name here."
                            ></TextField>
                        </div>
                        <div style={{padding:"2.5%"}}>
                            <TextField
                                id="password"
                                label="Password:"
                                value={this.state.password}
                                onChange={this.changeState.bind(this)}
                                fullWidth="true"
                                variant="outlined"
                                placeholder="Place you pass word here."
                            ></TextField>
                        </div>
                    </CardContent>
                    <CardActions >
                        <div style={{paddingLeft:"3.5%",paddingBottom:"5.5%"}}>
                            {/* <IconButton 
                                onClick={this.submit.bind(this)}
                                color="primary"
                                variant="contained"
                            >
                               <i class="material-icons">
                                    send
                                </i>
                            </IconButton> */}
                            <Button 
                                onClick={this.submit.bind(this)}
                                variant="contained" color="primary"
                            ><i class="material-icons">
                            how_to_reg
                            </i>
                                Sign In
                            </Button>
                        </div>
                    </CardActions>
                </Card>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<div><span id="message-id" style={{color:"red"}}>Invalid username or password, please try again</span></div>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className="no inputs"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }
    
}




export default Login
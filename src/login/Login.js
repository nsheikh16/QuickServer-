import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
        }
    }


    componentDidMount(){
        console.log("login mounted")
    }

    submit(){
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
                            <Link to="/main">
                            <Button 
                                onClick={this.submit.bind(this)}
                                variant="contained" color="primary"
                            ><i class="material-icons">
                            how_to_reg
                            </i>
                                Sign In
                            </Button>
                            </Link>
                        </div>
                    </CardActions>
                </Card>
            </div>
        )
    }
    
}




export default Login
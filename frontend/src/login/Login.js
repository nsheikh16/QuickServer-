import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Icon from'@material-ui/core/Icon';

import { Route, Link,Redirect, BrowserRouter as Router } from 'react-router-dom'

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            open:false,
            redirectToReferrer:false,
            response:false
        }
    }


    componentDidMount(){
        console.log("login mounted")
    }

    submit(){
        if(this.state.username === "" || this.state.password === ""){
            this.setState({open:true});
        }
        else{
            // console.log(this.state);

            var data={
                username:this.state.username,
                password:this.state.password,
            }
            var okay=false;

            const that = this;

            fetch('http://localhost:8081/login',{
                method:"POST",
                mode:"cors",
                headers: {
                    "Content-Type": "application/json",

                },
                body:JSON.stringify(data),
            }).then(function(response){
                console.log(response);
                if(response.ok){
                    return response.json();
                }
            })
            .then(function(jsonData){
                return JSON.stringify(jsonData);
            })
            .then(jsonStr=>{
                console.log(jsonStr)
                this.setState(()=>({
                    redirectToReferrer:true
                }));
                this.props.login();
            })
            .catch(error=>{
                console.log(error)
            })

            console.log(this.state)
            
            this.setState(() => ({
                redirectToReferrer: true
            }))
            this.props.login();



        }
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

        const { from } = this.props.location.state || { from: { pathname: '/' }};
        if (this.state.redirectToReferrer === true) {
          return <Redirect to={from} />
        }

        return(
        <Paper 
            square
            style={{ paddingTop:"5%",paddingLeft:"10%",paddingRight:"10%",paddingBottom:"10%", backgroundColor:"#dbdbdb"}}
        >
            <div style={{padding:"15%",paddingRight:"15%",paddingTop:"10%",paddingBottom:"10%"}}>
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
                            <Button 
                                onClick={this.submit.bind(this)}
                                variant="contained" color="primary"
                            ><Icon>
                            how_to_reg
                            </Icon>
                                Sign In
                            </Button>
                            <Link to="/login">
                                <Button
                                variant="contained"
                                style={{textDecoration:"none"}}
                                >
                                    <Icon>
                                    person_add
                                        </Icon>Sign Up</Button>
                            </Link>
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
        </Paper>
        )
    }
    
}




export default Login
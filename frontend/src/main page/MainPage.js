import React, { Component } from 'react';
import Posting from './Posting'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


import hero from './hero.jpg'


const styles={
    heroImage:{
        zIndex:-1,
        backgroundImage:"url("+hero+")",
        height: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    heroText:{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        bottom:"50px",
        transform: "translate(-50%, -50%)",
    },
      multilineColor:{
        color:'white'
    }
}
class MainPage extends Component{

    constructor(props){
        super(props);
        this.state={
            sx:4,
            postings:[],
        }
    }
    componentDidMount(){
        fetch("http://localhost:8081/")
            .then(data=>data.json(),{
                method:"GET",
                mode:"cors",
            })
            .then(res=>this.setState({postings:res}))
            .catch(error=>console.log("error", error)
        );

        console.log(this.state.postings);
    }

    handleDelete=(param)=>{
        console.log(param);

        var list = JSON.parse(JSON.stringify(this.state.postings))
        var index;
        console.log(this.state.postings)
        for(var i = 0 ; i < list.length; i++){
            if(list[i]._id===param){
                index=i;
                break;
            }
        }
        list.splice(index,1);
        console.log(list,index)
        this.setState({postings:list});


        
        var payload={_id:param};
        fetch("http://localhost:8081/", {
            method: 'DELETE',
            mode:"cors",
            headers: payload
        })
        .then(response => {if(response.status===200){
            var list = this.state.postings;
            for(var i = 0 ; i < list.length; i++){
                if(list[i]._id===param){
                    list.splice(i,1);
                    break;
                }
            }
            this.setState({postings:list});
        }})
        .catch(error => console.error('Error:', error));

    }

    render(){
        const postings = this.state.postings
        const { classes } = this.props;
        return (

            <div>
                <div style={styles.heroImage}>
                    <div style={styles.heroText}>
                        <Typography variant="display3" color="inherit" gutterBottom style={{color:"white",fontSize:"50px"}}>Job Postings Page</Typography>
                        <TextField

                            placeholder="Search for a Posting"
                            className={classes.root}

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>
                                            search
                                        </Icon>
                                    </InputAdornment>
                                ),
                                className:classes.multilineColor,

                            }}
                            >
                              
                        </TextField>
                    </div>
                </div>
            <Paper 
                square
                id="paper"
                elevation="0"
            >

            {/* <div style={{paddingBottom:"8%"}}>
                <Paper square>
                    <div style={{paddingTop:"5%", paddingLeft:"5%"}}>
                        <Typography variant="display3" color="inherrit">
                            Job Postings:
                        </Typography>
                    </div>
                    <Grid container spacing={24} style={{padding:"2.5%"}}>
                        <Grid style={{paddingLeft:"4%"}}item xs={12}>
                            <TextField 
                            helperText="Search for a Posting"
                            label="Search" 
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>
                                            search
                                        </Icon>
                                    </InputAdornment>
                                ),
                              }}></TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/create" style={{textDecoration:"none"}}>
                                <Button
                                    size="large" 
                                    color="primary" 
                                    style={{textTransform:"none"}}
                                >
                                    <Icon>
                                        add_box
                                    </Icon>
                                    <p>
                                        Add a New Job Posting
                                    </p>
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                size="large" 
                                color="secondary" 
                                style={{textTransform:"none"}}
                                >
                                <Icon>
                                    portrait
                                </Icon>
                                <p>
                                    Go to Your Profile
                                </p>
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/hero" style={{textDecoration:"none"}}>
                                <Button
                                    size="large" 
                                    color="action" 
                                    style={{textTransform:"none"}}
                                    >
                                    <Icon>
                                        home
                                    </Icon>
                                    <p>
                                        Go to Home Page
                                    </p>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper> 
            </div> */}
                {this.state.postings.length === 0 ? (
                    <Paper style={{textAlign:"center",padding:"10%"}}>
                            <Typography variant="h5" >
                                No Data To Display
                            </Typography>
                    </Paper>
                    ):(
                    <Grid container spacing={24} >
                        {postings.map(post=>(
                            <Grid item xs={this.state.sx}>
                                <Posting viewing={true} className={post._id} handleDelete={this.handleDelete} data={post} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Paper>
            </div>


        );
    }
}
MainPage.propTyles={
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(MainPage);
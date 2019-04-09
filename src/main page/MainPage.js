import React, { Component } from 'react';
import Posting from './Posting'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



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

//this.setState({postings:res})
    render(){
        return (

            <div id="MainPage">
            <div style={{paddingBottom:"2.5%"}}>
                <Typography variant="display3">
                    Job Postings:
                </Typography>
            </div>
            <Grid container spacing={24} style={{paddingBottom:"2.5%"}}>
                <Grid item xs={4}>
                <Link to="/create" style={{textDecoration:"none"}}>
                    <Button
                        variant="contained" 
                        size="large" 
                        color="primary" 
                        style={{textTransform:"none"}}
                    >
                        <i class="material-icons">
                            add_box
                        </i>
                        <p>
                            Add a New Job
                        </p>
                    </Button>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained" 
                        size="large" 
                        color="secondary" 
                        style={{textTransform:"none"}}
                    >
                        <i class="material-icons">
                            portrait
                        </i>
                        <p>
                            Go to Your Profile
                        </p>
                    </Button>
                </Grid>
                
            </Grid>
            <Grid container spacing={24}>
                {this.state.postings.map(post=>(
                    <Grid item xs={this.state.sx}>
                        <Posting data={post} />
                    </Grid>
                ))}
            </Grid>

                
            </div>


        );
    }
}

export default MainPage;
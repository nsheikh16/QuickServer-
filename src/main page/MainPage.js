import React, { Component } from 'react';
import Posting from './Posting'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const DATA={
    "postings":[
        {
            "title":"Posting 1",
            "author":"Ross Hahn",
            "summary":"a very brief summary of the job for posting 1",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "price":25
        },{
            "title":"Posting 2",
            "author":"Tim Richards",
            "summary":"a very brief summary of the job for posting 2",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "price":30
        },{
            "title":"Posting 3",
            "author":"Emily Goroza",
            "summary":"a very brief summary of the job for posting 3",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "price":30
        },{
            "title":"Posting 4",
            "author":"Emily Goroza",
            "summary":"a very brief summary of the job for posting 4",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "price":32
        }
    ]
}


class MainPage extends Component{

    constructor(props){
        super(props);
        this.state={
            sx:4,
        }
    }
    componentDidMount(){
        console.log(DATA);
    }


    render(){
        return (

            <div id="MainPage">
            <div style={{paddingBottom:"2.5%"}}>
                <Typography variant="display3">
                    QuickServer Job Postings: 
                </Typography>
            </div>
            <Grid container spacing={24} style={{paddingBottom:"2.5%"}}>
                <Grid item xs={4}>
                    <Link to="/create">
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
                <Link to="/profile">
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
                    </Link>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                {DATA.postings.map(post=>(
                    <Grid item xs={this.state.sx}>
                        <Posting props={post} />
                    </Grid>
                ))}
            </Grid>

                

            </div>


        );
    }
}

export default MainPage;
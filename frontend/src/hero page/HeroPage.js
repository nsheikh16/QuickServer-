import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import NavCard from './NavCard';
import HeroImage from '../hero image/HeroImage';


class HeroPage extends Component{


    render(){

        const array=[
            {
                icon:"dns",
                description:"Create a New Posting",
                color:"primary",
                link:"/create"
            },{
                icon:"shop",
                description:"Visit The Postings",
                color:"action",
                link:"/main"
            },{
                icon:"face",
                description:"Visit Your Profile",
                color:"secondary",
                link:"/profile"
            }
        ];

        return (

            <div>
                <HeroImage args={{title:"Welcome to Quickserver!"}}/>
                <Paper 
                    square 
                    elevation="0" 
                    style={{ zIndex:"-1",paddingTop:"5%",paddingLeft:"13%",paddingRight:"10%",paddingBottom:"10%", backgroundColor:"#dbdbdb"}}
                >
                    <Grid container spacing={24}>
                        {array.map(obj=>(
                            <Grid item xs={4}>
                                <NavCard data={obj}/>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>

            </div>


        );
    }
}

export default HeroPage;
import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  });


class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }



    componentDidMount(){
        console.log("Profile mounted");
    }

    render(){
        return(
            <Paper 
            square
            style={{ paddingTop:"5%",paddingLeft:"10%",paddingRight:"10%",paddingBottom:"10%", backgroundColor:"#dbdbdb"}}
            >
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Card>
                            <div >
                                <CardContent >
                                <Typography variant="display3" color="primary">
                                    Profile:
                                </Typography>
                                <Typography variant="display1" color="textSecondary">
                                    Ross Hahn
                                </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                image="../mp427.jpg"
                                title="Ross Hahn"
                            />
                            <img src="https://cimg1.ibsrv.net/ibimg/hgm/1600x900-1/100/380/mclaren-mp4-27-2012-formula-1-race-car_100380113.jpg"  width="100%"></img>
                        </Card>
                    </Grid>
                </Grid>
                <Grid style={{paddingTop:"5%"}}container spacing={12}>
                    <Grid item xs={6}style={{paddingRight:"2.5%"}}>
                        <Card>
                            <CardContent>
                            <Typography variant="display1" color="primary">
                                Number of Jobs Completed
                            </Typography>
                            <List>
                                {/* {this.state.jobs.map(job=>(
                                    <ListItem>
                                        <i class="material-icons">
                                            monetization_on
                                        </i>
                                        <ListItemText primary={job} secondary="date"/>
                                    </ListItem>
                                ))} */}
                            </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft:"2.5%"}}>
                        <Card>
                            {/* <CardHeader/> */}
                            <CardContent>
                                <Typography variant="display1" color="secondary">
                                    Balance
                                </Typography>

                                <Typography variant="headline">$400,000.00</Typography>


                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Paper>
        );
    }
}
export default Profile;
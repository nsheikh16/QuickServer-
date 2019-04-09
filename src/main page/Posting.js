import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class Posting extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            summary:"",
            price:0,
            description:"",
            author:"",
            open:false,
        }
        this.handleClose=this.handleClose.bind(this);
        this.handleOpen=this.handleOpen.bind(this);
    }

    componentDidMount(){
        console.log("props",this.props);
        this.setState({
            title:this.props.data.title,
            summary:this.props.data.summary,
            price:this.props.data.price,
            description:this.props.data.description,
            author:this.props.data.author,
        })
    }

    handleClose(){
        console.log(this.props)
        this.setState({open:false});
    }

    handleOpen(){
        console.log(this.props)
        this.setState({open:true});
    }

//https://cimg1.ibsrv.net/ibimg/hgm/1600x900-1/100/380/mclaren-mp4-27-2012-formula-1-race-car_100380113.jpg
    render(){
        return(
            <div>
                <ButtonBase onClick={this.handleOpen}>
                    <Card raised="false">

                        <CardHeader
                            avatar={
                                <Avatar>
                                R
                                </Avatar>
                            }
                            title={this.state.title}
                            subheader="September 14, 2016"
                        >
                        </CardHeader>

                        <CardMedia>
                            <img src="https://cimg1.ibsrv.net/ibimg/hgm/1600x900-1/100/380/mclaren-mp4-27-2012-formula-1-race-car_100380113.jpg" width="100%" alt="Italian Trulli"></img>
                        </CardMedia>

                        <CardContent>
                            <Typography component="p">
                                {this.state.summary}
                            </Typography>
                        </CardContent>
                    </Card>   
                </ButtonBase>
                <Dialog
                    id="do"
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    >
                    <DialogTitle id="alert-dialog-slide-title">
                        <Typography color="primary" variant="display2">
                            {this.state.title}
                        </Typography>
                        <Typography variant="headline">
                            Posted by: {this.state.author}
                        </Typography>
                        <Typography color="primary" variant="title">
                            Price: {this.state.price}
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {this.state.description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={this.handleClose} color="primary">
                            <i class="material-icons">
                                cancel
                            </i>
                            <p>Close</p>
                        </Button>
                    </DialogActions>
                    </Dialog>    
            </div>
        );
    }
}
export default Posting;
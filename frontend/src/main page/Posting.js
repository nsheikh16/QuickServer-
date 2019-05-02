import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles={
    button:{
        color:"white",
    },
    popup:{
        width:"100%",
    }
}

class Posting extends Component{
    constructor(props){
        super(props);
        this.state={
            _id:"",
            title:"",
            summary:"",
            price:0,
            description:"",
            author:"",
            open:false,
            viewing:false
        }
    }

    componentDidMount(){

        if(this.props.viewing){
            this.setState({viewing:true});
        }
        this.setState({
            _id:this.props.data._id,
            title:this.props.data.title,
            summary:this.props.data.summary,
            price:this.props.data.price,
            description:this.props.data.description,
            author:this.props.data.author,
        })
    }

    handleClose=()=>{
        this.setState({open:false});
    }

    handleOpen=()=>{
        this.setState({open:true});
    }



    render(){
        return(
            <div>
                <Card square elevation="10">
                    <CardActionArea onClick={this.handleOpen} style={{height:200}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.state.title}
                            </Typography>
                            <Typography gutterBottom variant="subheading" component="h2">
                                {this.state.summary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{height:40,background:"black",margin:"0 auto"}}>
                        {this.state.viewing ? (
                        <div>
                            <Button style={styles.button}>
                                <Link to={{ pathname: '/create', args: {
                                            _id:this.state._id,
                                            title:this.state.title,
                                            summary:this.state.summary,
                                            price:this.state.price,
                                            description:this.state.description,
                                            author:this.state.author,} }}>
                                    <Icon class="material-icons">
                                    create
                                    </Icon>
                                </Link>
                            </Button>
                            <Button onClick={()=>this.props.handleDelete(this.state._id)} style={styles.button}>
                                <i class="material-icons">
                                    delete_forever
                                </i>
                            </Button>
                        </div>
                        ):(
                        <div>                        

                        </div>)}

                    </CardActions>
                </Card>
                <Dialog
                    id="do"
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}

                    fullWidth
                    maxWidth="md"

                    
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={styles.popup}
                    >
                    <DialogTitle  id="alert-dialog-slide-title">
                        <Typography color="primary" variant="display2">
                            {this.state.title}
                        </Typography>
                        <Typography variant="headline">
                            <Icon style={{ fontSize: 30 }}>
                                person
                            </Icon>:{this.state.author}
                        </Typography>
                        <Typography color="primary" variant="title">
                            <Icon style={{ color:"green",fontSize: 30 }}>
                                money
                            </Icon>
                            : ${this.state.price}
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Icon color="Primary" style={{ fontSize: 40 }}>
                            description
                        </Icon>
                        <Divider/>
                        <DialogContentText id="alert-dialog-slide-description">
                            {this.state.description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <IconButton variant="contained" onClick={this.handleClose} color="primary">
                            <i class="material-icons">
                                cancel
                            </i>
                        </IconButton>
                    </DialogActions>
                </Dialog>    
            </div>
        );
    }
}
export default Posting;
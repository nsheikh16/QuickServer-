import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles={
    icon:{
        fontSize:"60px",
        textAlign:"center",
    },    
    heroText:{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    bottomBar:{
        height:40,
        background:"black",
        textAlign:"center"
    },
    textCorrection:{
        color:"white", 
        paddingTop:"2%"
    }
}

class NavCard extends Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){

    };

    render(){

        return(
            <div>
                <Card square>
                <Link to={this.props.data.link}>
                    <CardActionArea onClick={this.handleOpen} style={{height:175}}>
                        <CardContent style={styles.heroText} >
                            <Icon style={styles.icon} color={this.props.data.color}>
                                {this.props.data.icon}
                            </Icon>
  
                        </CardContent>
                    </CardActionArea>
                    </Link>
                    <div style={styles.bottomBar}>
                        <Typography gutterBottom variant="subheading" component="h2" style={styles.textCorrection} >
                            {this.props.data.description}
                        </Typography>
                    </div>
                </Card> 
            </div>
        );
    }
}
export default NavCard;
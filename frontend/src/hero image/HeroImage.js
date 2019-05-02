import React, { Component } from 'react';

import hero from './hero.jpg'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';

const styles={
    heroImage:{
        zIndex:-1,
        backgroundImage:"url("+hero+")",
        height: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"

    },
    heroText:{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
      }
}

class HeroImage extends Component{
    constructor(props){
        super(props);
        this.state={
            title:""
        }
    }


    componentDidMount(){
        this.setState({title:this.props.args.title});
    }

    render(){

        return(
            <div style={styles.heroImage}>
                <div style={styles.heroText}>
                    <Typography variant="display3" style={{color:"white"}}>{this.state.title}</Typography>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(HeroImage);
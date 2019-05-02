import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'

import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';


import './App.css';
import {   
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter} from 'react-router-dom'

import Login from './login/Login';
import CreateJob from './create job/CreateJob';
import MainPage from './main page/MainPage';
import Profile from './profile/Profile';
import HeroPage from './hero page/HeroPage';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const padd="11%";
const drawerWidth = 220;
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    top:"64px",
    zIndex:1,
    backgroundColor:"#303030",
    left:"11%",
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    top:"64px",
    
    left:"11%",
    zIndex:1,
    overflowX: 'hidden',
    backgroundColor:"#303030",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
});



class App extends Component {

  constructor(props){
    super(props);
    this.state={
      thing:1,
      open:false,
      redirectToReferrer: false,
    }
  }


  openDrawer=()=>{
    this.setState({open:!this.state.open});
  };

  closeDrawer=()=>{
    this.setState({open:false});
  };


  render() {
    const { classes, theme } = this.props;
    return (
      <Router>
        <div style={{paddingLeft:"11%",paddingRight:"11%",}}> 
          <AppBar style={{backgroundColor:"black"}} position="sticky">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                // onClick={this.openDrawer}
              >
                <i class="material-icons">
                  menu
                </i>
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            onClose={this.closeDrawer}
            open={this.state.open}
            >
              <List >
                {[
                  {title:'Home Page',icon:"home",link:"/hero"},
                  {title:'Postings Page',icon:"shopping_cart",link:"/main"},
                  {title:'Create Posting',icon:"add+box",link:"/create"},
                  {title:'Logout',icon:"meeting_room",link:"/hero"}
                ].map((text) => (
                  <Link to={text.link}style={{textDecoration:"none"}}>
                    <ListItem button key={text} onClick={this.closeDrawer}>
                      <ListItemIcon style={{color:"white"}}><Icon>{text.icon}</Icon></ListItemIcon>
                      <ListItemText 
                        disableTypography
                        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>{text.title}</Typography>} />
                    </ListItem>
                  </Link>
              ))}
            </List>
          </Drawer>

            <Route path="/hero" component={HeroPage}/>
            <Route path="/main" component={MainPage} />
            <Route path="/create" component={CreateJob} />
            <Route path="/profile" component={Profile} />

        </div>
      </Router>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);

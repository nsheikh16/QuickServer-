import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './login/Login';
import CreateJob from './create job/CreateJob';
import MainPage from './main page/MainPage';
import Profile from './profile/Profile';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      thing:1,
      open:false,
    }
  }

  componentDidMount(){
    console.log("hello world!")
  }

  appendToThing(){
    // let temp=this.state.thing.push("hello")
    this.setState({thing:this.state.thing+1})
    console.log(this.state.thing)
  }

  render() {
    return (
      <Router>
        <div> 
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit">Login</Button>`
            </Toolbar>
          </AppBar>

          <div style={{paddingTop:"5%",paddingLeft:"15%",paddingRight:"15%",paddingBottom:"10%"}}>
              <Route path="/login" component={Login} />
              <Route path="/main" component={MainPage} />
              <Route path="/create" component={CreateJob} />
              <Route path="/profile" component={Profile} />
          </div>
          </div>
        </Router>
    );
  }
}

export default App;

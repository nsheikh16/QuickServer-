import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class CreateJob extends Component{

    constructor(props){
        super(props);
        this.state={
            title:"",
            summary:"",
            description:"",
            price:0,
        }
        this.changeState=this.changeState.bind(this);
    }

    componentDidMount(){
        console.log("Create Job Mounted")
    }

    changeState(e){
        switch(e.target.id){
            case "Title":
                this.setState({title:e.target.value})
                break;
            case "Summary":
                this.setState({summary:e.target.value})
                break;
            case "Description":
                this.setState({description:e.target.value})
                break;
            case "Price":
                this.setState({price:e.target.value})
                break;
            default:
                break;
        }
    }

    handleClick(){
        console.log(this.state)
    }

    render(){
        return( 

            <div id="CreateJob">
                <Card>
                    <CardContent>
                        <div>
                            <Typography component="h2" variant="display3" gutterBottom>
                                Create Job Posting:
                            </Typography>
                        </div>
                        <div style={{paddingBottom:"2.5%"}}>
                            <TextField
                                id="Title"
                                label="Title:"
                                placeholder="The title of your job."

                                value={this.state.title}
                                onChange={this.changeState}
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="Summary"
                                label="Summary of Job:"
                                fullWidth
                                value={this.state.summary}
                                onChange={this.changeState}
                                placeholder="Write a brief description of your job."
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                                id="Description"
                                label="Job Description:"
                                multiline
                                rows="16"
                                rowsMax="16"
                                fullWidth
                                value={this.state.description}
                                onChange={this.changeState}
                                margin="normal"
                                placeholder="Write a detailed description of the Job you wish to post."
                                variant="outlined"
                            />
                        </div>
                        <div>
                        <TextField
                            id="Price"
                            label="Price"
                            value={this.state.price}
                            onChange={this.changeState}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />
                        </div>
                    </CardContent>
                    <CardActions>
                    <Link to="/main">
                        <Button
                            onClick={this.handleClick.bind(this)}
                            variant="contained"
                            color="primary"
                        >
                        <i class="material-icons">
                            send
                        </i>
                            Continue
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CreateJob;
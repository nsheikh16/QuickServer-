import React, { Component } from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button';
import IconButton from'@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function getSteps() {
    return ['Create', 'Review', 'Finish'];
}
 
  

class CreateJob extends Component{

    constructor(props){
        super(props);
        this.state={
            title:"",
            summary:"",
            description:"",
            price:0,
            activeStep: 0,
            disableNext:true,
            error:false,
        }
        this.changeState=this.changeState.bind(this);
    }

    componentDidMount(){
        console.log("Create Job Mounted")
    }

    changeState(e){
        var state = this.state;
        if(state.description!="" &&state.summary!=""&& state.title!="" ){
            this.setState({disableNext:false});
        }
        if(e.target.value==""){
            this.setState({disableNext:true});
        }
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

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({activeStep: activeStep + 1,});
    };

    handleSubmit = () => {
        const { activeStep } = this.state;
        this.setState({activeStep: activeStep + 1,});

        const payload = {
            title:this.state.title,
            summary:this.state.summary,
            description:this.state.description,
            price:this.state.price,
            author:"rim tichards"
        }

        fetch("http://localhost:8081/", {
            method: 'POST',
            mode:"cors",
            headers: payload
        })
        .then(response => response.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    
    handleBack = () => {
        this.setState(state => ({activeStep: state.activeStep - 1,}));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleClick(){
        console.log(this.state)
    }

    render(){
        const { classes } = this.props;
        const { activeStep } = this.state;
        const steps = getSteps();
        const state=this.state;
        var changeState=this.changeState;

         
        function getStepContent(step) {
            switch (step) {
                case 0:
                return (
                    <div className="inputs">
                        <Card style={{padding:"5%"}}>
                            <CardContent>
                                <div>
                                    <Typography component="h2" variant="display2" gutterBottom>
                                        Create Job Posting:
                                    </Typography>
                                </div>
                                <div style={{paddingBottom:"2.5%"}}>
                                    <TextField
                                        id="Title"
                                        label="Title:"
                                        placeholder="The title of your job."

                                        value={state.title}
                                        onChange={changeState}
                                        variant="filled"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="Summary"
                                        label="Summary of Job:"
                                        fullWidth
                                        value={state.summary}
                                        onChange={changeState}
                                        placeholder="Write a brief description of your job."
                                        variant="outlined"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="Description"
                                        label="Job Description:"
                                        multiline
                                        rows="8"
                                        rowsMax="8"
                                        fullWidth
                                        value={state.description}
                                        onChange={changeState}
                                        margin="normal"
                                        placeholder="Write a detailed description of the Job you wish to post."
                                        variant="outlined"
                                    />
                                </div>
                                <div>
                                <TextField
                                    id="Price"
                                    label="Price"
                                    value={state.price}
                                    onChange={changeState}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
                                    variant="filled"
                                />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                );
                case 1:
                return (
                    <Card>  
                        <CardContent style={{padding:"5%"}}>
                            <Typography style={{paddingTop:"1%"}} component="h2" variant="display2">
                                {state.title}:<p style={{color:"green"}}>{state.price}</p>
                            </Typography>
                            <Typography style={{paddingTop:"1%",paddingBottom:"1%"}}  component="h2" variant="headline">
                                {state.summary}
                            </Typography>
                            <Typography  style={{paddingTop:"1%",paddingBottom:"1%"}}component="h2" variant="subheadline">
                                {state.description}
                            </Typography>
                        </CardContent>
                    </Card>
                );
                case 2:
                    return (<Paper>
                        <Typography style={{padding:"5%"}} variant="display1"> Are you ready to submit?</Typography>
                    </Paper>);
                default:
                    return 'Unknown step';
            }
        }
        return( 

            <div id="CreateJob">
                <div style={{paddingBottom:"5%"}}>
                    <Paper >
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const props = {};
                                const labelProps = {};
                                return (
                                <Step key={label} {...props}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                                );
                            })}
                        </Stepper>
                    </Paper>
                </div>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                        <Paper style={{padding:"5%"}}>
                            <Typography variant="display1">
                                All steps completed - your job has been posted!
                            </Typography>
                        </Paper>
                        <Button onClick={this.handleReset} className="Reset" variant="contained"color="secondary">
                        <i class="material-icons">
                        settings_backup_restore
                        </i>
                        </Button>
                        <Link to="/main" >
                            <Button style={{textDecoration:"none"}}>
                                Return to home page
                                <i class="material-icons">
                                settings_backup_restore
                                </i>
                            </Button>
                        </Link>
                        </div>
                    ) : (
                        <div>
                        <Typography>{getStepContent(activeStep)}</Typography>
                        <div style={{paddingTop:"5%"}}>
                            <Button
                            variant="contained"
                            color="secondary"
                                disabled={activeStep === 0}
                                onClick={this.handleBack}
                                className="Back"
                            >
                            <i class="material-icons">
                            reply
                            </i>
                            </Button>
                            
                            
                            {activeStep === steps.length - 1 ?
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                                className=""
                                disabled={this.state.disableNext}
                                >
                                <i class="material-icons">
                                    cloud_upload
                                </i>
                            </Button>
                            :
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleNext}
                                className=""
                                disabled={this.state.disableNext}
                            >
                                <i class="material-icons">
                                send
                                </i>
                            </Button>
                            }


                        </div>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CreateJob;
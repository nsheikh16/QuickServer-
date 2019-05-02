import React, { Component } from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Grid from'@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';
import IconButton from'@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Posting from '../main page/Posting.js';

function getSteps() {
    return ['Create', 'Review', 'Finish'];
}
 
  

class CreateJob extends Component{

    constructor(props){
        super(props);
        this.state={

            create:"Create Job Posting",
            _id:"",
            title:"",
            author:"",
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
        if (this.props.location.args){
            console.log("this is an edit prompt",this.props.location.args)
            const args = this.props.location.args
            this.setState({
                _id:args._id,
                title:args.title,
                author:args.author,
                summary:args.summary,
                description:args.description,
                price:args.price,
                disableNext:false,
                create:"Edit Job Posting"
            })
        }
    }

    changeState(e){
        var state = this.state;
        if(state.description!="" &&state.summary!=""&& state.title!="" && state.author!="" ){
            this.setState({disableNext:false});
        }
        if(e.target.value==""){
            this.setState({disableNext:true});
        }
        switch(e.target.id){
            case "Title":
                this.setState({title:e.target.value})
                break;
            case "Author":
                this.setState({author:e.target.value});
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


        if(this.props.location.args){
            const payload = {
                _id:this.state._id,
                title:this.state.title,
                summary:this.state.summary,
                description:this.state.description,
                price:this.state.price,
                author:this.state.author,
            }
            console.log("editing the posting");
            fetch("http://localhost:8081/",{
                method:"PUT",
                mode:"cors",
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body:JSON.stringify(payload)
            }).then(response=>response.json())
        }else{
            const payload = {
                title:this.state.title,
                summary:this.state.summary,
                description:this.state.description,
                price:this.state.price,
                author:this.state.author,
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

    }
    
    handleBack = () => {
        this.setState(state => ({activeStep: state.activeStep - 1,}));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            title:"",
            author:"",
            summary:"",
            description:"",
            price:0,
            activeStep: 0,
            disableNext:true,
            error:false,
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
                        <Card square style={{padding:"5%"}}>
                            <CardContent>
                                <div>
                                    <Typography component="h2" variant="display2" color="primary" gutterBottom>
                                        {state.create}
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
                                <div style={{paddingBottom:"2.5%"}}>
                                    <TextField
                                        id="Author"
                                        label="Author:"
                                        placeholder="Kimi No Na Wa"

                                        value={state.author}
                                        onChange={changeState}
                                        variant="outlined"
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
                        // <Card>  
                        //     <CardContent style={{padding:"5%"}}>
                        //         <Typography style={{paddingTop:"1%"}} component="h2" variant="display2">
                        //             {state.title}:<p style={{color:"green"}}>{state.price}</p>
                        //         </Typography>
                        //         <Typography style={{paddingTop:"1%",paddingBottom:"1%"}}  component="h2" variant="headline">
                        //             {state.summary}
                        //         </Typography>
                        //         <Typography  style={{paddingTop:"1%",paddingBottom:"1%"}}component="h2" variant="subheadline">
                        //             {state.description}
                        //         </Typography>
                        //     </CardContent>
                        // </Card>
                        <Paper square >
                            <Typography color="primary" variant="display2" gutterBottom style={{paddingTop:"8%",paddingLeft:"8%"}}>
                                Review Your Submission:
                            </Typography>
                            <div style={{paddingLeft:"20%",paddingRight:"20%",paddingBottom:"20%",paddingTop:"5%"}}>
                                <Posting data={{
                                id:"new posting",
                                title:state.title,
                                summary:state.summary,
                                description:state.description,
                                author:state.author}}
                                viewing={false}
                                />
                            </div>
                        </Paper>
                    );
                case 2:
                    return (
                        <Paper style={{height:"100%"}}>
                            <Typography style={{padding:"5%"}} variant="display1"> Are you ready to submit?</Typography>
                        </Paper>
                    );
                default:
                    return 'Unknown step';
            }
        }
        return( 

            <Paper
                style={{paddingLeft:"15%",paddingRight:"15%"}} 
                square
                elevation="0"
                id="paper"
                >
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
                            <div style={{paddingTop:"5%"}}>
                            <Paper style={{padding:"5%"}}>
                                <Grid container xs={12}>
                                    <Grid item xs={6}>
                                    <Button onClick={this.handleReset} className="Reset" variant="contained"color="secondary">
                                        <Icon>
                                            settings_backup_restore
                                        </Icon>
                                    </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Link to="/main" >
                                        <Button variant="contained" color="primary" style={{textDecoration:"none"}}>
                                            <Icon>
                                                home
                                            </Icon>
                                        </Button>
                                    </Link>
                                    </Grid>
                                </Grid>
                            </Paper>
                            
                            </div>
                        </div>
                    ) : (
                        <div >
                        <div style={{paddingBottom:"2.5%"}}>
                            <Typography>{getStepContent(activeStep)}</Typography>
                        </div>
                        <Paper square style={{padding:"5%"}}>
                            <Grid container xs={12}>
                                <Grid item xs={6}>
                                    <Button
                                    variant="contained"
                                    color="secondary"
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className="Back"
                                    >
                                        <Icon>
                                            reply
                                        </Icon>
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    {activeStep === steps.length - 1 ?
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleSubmit}
                                            className=""
                                            disabled={this.state.disableNext}
                                            >
                                            <Icon>
                                                cloud_upload
                                            </Icon>
                                        </Button>
                                        :
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className=""
                                            disabled={this.state.disableNext}
                                            >
                                            <Icon>
                                            send
                                            </Icon>
                                        </Button>
                                    }
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                    )}
                </div>
            </Paper>
        );
    }
}

export default CreateJob;
import React, { Component } from 'react';
import NavBar from './NavBar';
import Total from './Total';
import Breakdown from './BudgetTable';
import Available from './Remaining';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';    
import { makeStyles } from '@material-ui/core/styles';
import CanvasJSReact from './canvasjs.react';
import { CanvasJS } from './canvasjs.react';
import { CanvasJSChart} from './canvasjs.react';
import Box from '@material-ui/core/Box'
import { sizing } from '@material-ui/system';

const options = {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "Monthly Income Spent"
  },
  axisX: {
    title: "Categories",
    reversed: true,
  },
  axisY: {
    title: "Dollar Amount",
  },
  data: [{
    type: "bar",
    dataPoints: [
      { y:  700, label: "Rent" },
      { y:  85, label: "Travel" },
      { y:  100, label: "Groceries" },
      { y:  25, label: "Gambling" }
    ]
  }]
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    marginTop: '20px',
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    marginTop: '20px',
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    marginTop: '5px',
  },
  size:{
    height: '1/6',
    width: '100vh',
  }
}));

export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
          <Grid container direction="row" alignItems="center" justify="center" spacing = {3}>

              <Grid item xs={3} ><Paper className={classes.paper}><Total></Total></Paper></Grid>
              <Grid item xs={3} ><Paper className={classes.paper1}><Available></Available></Paper></Grid>
            
          </Grid>
          <Grid container direction="row" alignItems="center" justify="center" spacing = {3}>
            <Grid item xs ={6}>
            <Paper className={classes.paper}>
                <CanvasJSChart options = {options}/>
            </Paper>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" justify="center" spacing = {4}>
            <Grid item xs={6}>
                <Breakdown/>
            </Grid>
          </Grid>
      </div>   
    );
  }

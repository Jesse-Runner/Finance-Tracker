import React, { Component } from 'react';
import NavBar from './NavBar';
import Total from './Total';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';    
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import { sizing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  size:{
    height: '100vh',
    width: '100vh',
  }
}));

export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
  
          <Grid container justify="center" xs={12}>
            <div className={classes.size}>
              <Box width={4/4} height={1/6} mt = {6}><Paper className={classes.paper}><Total></Total></Paper></Box>
            </div>   
          </Grid>

    );
  }

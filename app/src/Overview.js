import React, { Component } from 'react';
import Group from './ExpenseGroup';
import NewCategory from './Popup';
import Addexpense from './AddExpense';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Select from './CategoryView';

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
    button: {
        padding: theme.spacing(1),
        marginTop: '20px',
        marginRight: '40px',
    },
    button1: {
        marginTop: '20px',
        marginRight: '40px',
    }
}));


export default function Overview() {

    const classes = useStyles();
    return(

        <div className={classes.root}>
            <Grid container direction="row" justify = "flex-end">
                <Grid item className={classes.button1}>
                    <Select/>
                </Grid>
                <Grid item className={classes.button}>
                    <NewCategory/>
                </Grid>
            </Grid>
        </div>
    );

}
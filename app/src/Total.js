import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>July Budget</Title>
      <Typography style={{color: '#2E3B55'}} component="p" variant="h4">
        $3,124.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        July 13th, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Adjust Monthly Balance
        </Link>
      </div>
    </React.Fragment>
  );
}
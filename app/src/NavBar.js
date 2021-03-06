import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MemoryRouter as Router, Route,Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  
  return (
    
    <Router>
    <div className={classes.root}>
      <AppBar style={{background: '#2E3B55'}} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mindful
          </Typography>
            <Button href = "/"style = {{marginRight: 30}} color="inherit">Home</Button>
            <Button href = "/Overview" style = {{marginRight: 30}} color="inherit">Overview</Button>
        </Toolbar>
      </AppBar>
    </div>
  </Router>
  );
}
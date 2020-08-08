import React, {Component} from 'react';
import TableDisplay from './TableDisplay';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class ConfirmationDialogRaw extends Component {

  state = {  
    isLoading: true,
    options: [],
    value: "empty",
    open: false,
}

findId = (options,value) =>{
  console.log(value);
     for(var i = 0; i < options.length; i++){
       console.log(options[i].name);
       if(options[i].name === value){
         return options[i].id;
       }
     }
     return -1;
}
handleChange = event => {
  const value = event.target.value;
  this.setState({value: value});
};
handleClickOpen = () => {
  this.setState({open: true,value:"empty"})
};
handleClose = () => {
  this.setState({open:false});
};

handleOk = () => {
  this.setState({open:false});
};

output = () => {
  if (this.state.value != "empty"){
    return <h3> {this.state.value}</h3>
  } 
};
async componentDidMount(){
  try{
      const response = await fetch('/api/Expense_group')
      if(!response.ok){
          throw Error(response.statusText);
      }
      const body = await response.json();
      this.setState({options: body, isLoading: false});
  }
  catch(error){
      console.log(error);
  }
}

  render(){
    var isLoading = this.state.isLoading;

    if(isLoading)
            return (<div>Loading </div>)
  return (
    <div>
    <Button variant="contained" style={{backgroundColor: '#2E3B55'}} color="primary" onClick={this.handleClickOpen}>Select Category</Button>
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={this.state.open}
    >
      <DialogTitle id="confirmation-dialog-title">Categories</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          aria-label="ringtone"
          name="ringtone"
          value={this.value}
          onChange={this.handleChange}
        >
          {this.state.options.map((option) => (
            <FormControlLabel value={option.name} key={option.id} control={<Radio />} label={option.name} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={this.handleClose} color="primary">
          Cancel
        </Button>
        <Button  onClick={this.handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
    <TableDisplay Selected={this.state.value} GroupId={this.findId(this.state.options,this.state.value)}/>
    </div>
  );
}}

export default ConfirmationDialogRaw;
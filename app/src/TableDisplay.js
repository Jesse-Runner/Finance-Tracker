import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tableshow from './Table';

class TableDisplay extends Component{
    state={
        isLoading: true,
        Expenses:[],
        selected: false
    }

StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);
    
StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

filterExpenses(x,y){
    var obj=[];
    for(var i = 0; i < x.length; i++){
        if(x[i].group.id === y){
            obj.push(x[i]);
        }
    }
    return obj;
}
async componentDidMount(){
    try{
        const response = await fetch('/api/Expense')
        if(!response.ok){
            throw Error(response.statusText);
        }
        const body = await response.json();
        this.setState({Expenses: body, isLoading: false});
    }
    catch(error){
        console.log(error);
    }
}
render(){
    
    const {isLoading} = this.state.isLoading;
    const populated = this.props.Populated;
    const relevantExpenses = this.filterExpenses(this.state.Expenses, this.props.GroupId);
    if(isLoading)
            return (<div>Loading </div>)

    if(populated === false){
            return (<div>Select your Category</div>)
    }
    return(

    <div>
            <Tableshow 
                // Name={item.name}
                // Desc={item.description}
                // Date={item.date}
                // Total={item.total}
                ExpenseList={relevantExpenses}
            />
    </div>
);
}

}

export default TableDisplay;
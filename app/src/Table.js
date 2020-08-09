import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function CustomizedTables(props) {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Expense</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.ExpenseList.map((props) => (
            <StyledTableRow key={props.id}>
              <StyledTableCell component="th" scope="row">
                {props.name}
              </StyledTableCell>
              <StyledTableCell align="right">{props.description}</StyledTableCell>
              <StyledTableCell align="right">{props.date}</StyledTableCell>
              <StyledTableCell align="right">{props.total}</StyledTableCell>
            </StyledTableRow>
         ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

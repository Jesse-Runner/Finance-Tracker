import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './NavBar';
import Group from './ExpenseGroup';
import Home from './Home';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
  state={}
  render(){
  return (
    <Router>
      <ButtonAppBar></ButtonAppBar>
      <Switch>
          <Route path='/' exact ={true} component={Home} Route/>
          <Route path='/Expense_group' exact ={true} component={Group} Route/>
      </Switch>
    </Router>

  );
 
}
}

export default App;

import React, { Component } from 'react';
import Group from './ExpenseGroup';
import Popup from './Popup';
import Addexpense from './AddExpense';

export default function Overview() {

return(
    <div>
        <Group/>
        <div>
            <Popup/>
        </div>
        <div>
            <Addexpense/>
        </div>
    </div>
);

}
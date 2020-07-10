import React, { Component } from 'react';

class Group extends Component {
    state = {  
        isLoading: true,
        Groups: []
    }
    async componentDidMount(){
        try{
            const response = await fetch('/api/Expense_group')
            if(!response.ok){
                throw Error(response.statusText);
            }
            const body = await response.json();
            this.setState({Groups: body, isLoading: false});
        }
        catch(error){
            console.log(error);
        }
    }
    render() { 
        const {Groups,isLoading} = this.state;
        if(isLoading)
            return (<div>Loading </div>)
        
        return (
            <div>
                <h2>Groups</h2>{
                    Groups.map(group =>
                    <div id = {group.id}>
                        {group.name}
                    </div>
                    )
                }
            </div>
          );
    }
}
 
export default Group;
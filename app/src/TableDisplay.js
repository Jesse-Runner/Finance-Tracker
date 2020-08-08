import React, {Component} from 'react';

class TableDisplay extends Component{
    state={
        isLoading: true,
        Expenses:[]
    }

possibleDisplay(props){
    if(props == "empty"){
        return null
    }
    return props
}
possibleDisplay2(x,y){
    if(x.group.id === y)
    {
        return x.name;
    }
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
    if(isLoading)
            return (<div>Loading </div>)
return(
    <div>
    {this.state.Expenses.map(item =>
        <div>
            {this.possibleDisplay2(item,this.props.GroupId)}
        </div>
    )}
    </div>
);
}

}

export default TableDisplay;
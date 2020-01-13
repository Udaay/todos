import React from 'react';
import Card from './Card'
import Entry from './Entry'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
        };
        this.handleEntry = this.handleEntry.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleEntry(target) {   
        this.setState({list: [...this.state.list, target]});
    }

    deleteItem(id) {
        let { list } = this.state;
        this.setState({list: _.filter(list,(list,index)=> id !== index) });
    }

    render() {
        let { list } = this.state;
        return(
            <React.Fragment>
                <Card  list= {list} deleteItem = {this.deleteItem} />
                <Entry handleEntry={this.handleEntry}/>
            </React.Fragment>
        );        
    }
}

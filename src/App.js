import React from 'react';
import Card from './Card'
import Entry from './Entry'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                
            ],
        };
        this.handleEntry = this.handleEntry.bind(this);
    }

    handleEntry(target) {
        let { list } = this.state;
        // if ( target != '') {
        this.setState({list: [...this.state.list, target]});
        // }
    }

    render() {
        let { list } = this.state;
        console.log(list);
        return(
            <React.Fragment>
                <Card  list= {list}/>
                <Entry handleEntry={this.handleEntry}/>
            </React.Fragment>
        );        
    }
}

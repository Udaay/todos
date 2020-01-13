import React, { Component } from 'react';
import _ from 'lodash';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.deleteItem(index);
  }

  render() {
    let { list} = this.props;
    return (
      <div>
        {_.map(list,(item,index)=>(
          <div className='list' key = {index} id= {index} > 
           {item} 
            <img onClick={() => this.handleClick(index) }  src="https://img.icons8.com/cotton/64/000000/delete-sign--v1.png"></img> 
          </div>))}

      </div>
    );
  }
} 

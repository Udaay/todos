import React, { Component } from 'react';
import _ from 'lodash';

export default class Card extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>

        {_.map(this.props.list,(item,index)=>(
          <div className='list' key = {index} >
           {item} 
            <img src="https://img.icons8.com/cotton/64/000000/delete-sign--v1.png"></img> 
          </div>))}

      </div>
    );
  }
} 

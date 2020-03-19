import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './pagination.css';

export default class CustomPaginationActionsTable extends Component {

  constructor(props) {
    super(props)
  
    this.state={
      maxNumOfPage:0
    }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page) {
    this.props.function(page);
  }

  render() {
    // const pageNumbers = [];
    // let i = 0;
     // for (i = 1; i <= Math.ceil(this.props.perPage.books.length / this.props.perPage.todosPerPage); i++) {
    //   pageNumbers.push(i);
    // }

    return (
      <div>
        <IconButton color="primary" component="span" >
          <KeyboardArrowLeftIcon onClick={()=>this.props.decfunction()}/>
        </IconButton>
        {/* {pageNumbers.map(o => (
          <Button color="black"
            onClick={() => this.handleClick(o)}>{o}</Button>
        ))} */}
        <IconButton color="primary" component="span" style={{ border: '2px' }}>
          <KeyboardArrowRightIcon onClick={()=> this.props.incfunction()}/>
        </IconButton>
      </div>
    )
  }
}



import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./pagination.css";

export default class CustomPaginationActionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxNumOfPage: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page) {
    this.props.function(page);
  }

  render() {
    return (
      <div>
        <IconButton color="primary" component="span">
          <KeyboardArrowLeftIcon onClick={() => this.props.decfunction()} />
        </IconButton>
        <IconButton color="primary" component="span" style={{ border: "2px" }}>
          <KeyboardArrowRightIcon onClick={() => this.props.incfunction()} />
        </IconButton>
      </div>
    );
  }
}

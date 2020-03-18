import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
var APIcall = require("../../congfiguration/BookStoreCallAPI");
// var ListofBooks = require('../../component/dashboard/listOfBooks')
var ListofBooks = require("../../component/dashboard/listOfBooks");


export default class MenuPopupState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SORTALLBOOKS: []
    };
    this.ListofBooks = React.createRef();
  }

  highToLowClick = (event) => {
    console.log("in high to low ");
    
    APIcall.getSortHighToLow().then(res => {
      console.log("in hight to low method-------------->",res.data.data);
      // this.setState({SORTALLBOOKS : res.data.data});
      this.props.value(res.data.data)
    });
  };

  lowToHighClick = event => {
    APIcall.getSortLowToHigh().then(res => {
      console.log(res.data.data[0]);
      this.setState({SORTALLBOOKS : res.data.data});
      this.props.value(res.data.data)
    });
  };

  sortArrivalClick = event => {
    APIcall.getSortByArrival().then(res => {
      console.log(res.data.data[0]);
      this.setState({SORTALLBOOKS : res.data.data});
      this.props.value(this.state.SORTALLBOOKS)
    });
  };

  render() {
    console.log("in dropdown sorted---------------->",this.state.SORTALLBOOKS);
    
    return (
      <div className="dropdown">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Button
                {...bindTrigger(popupState)}
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: 10,
                  borderStyle: "ridge",
                  borderWidth: "thin",
                  borderColor: "grey"
                }}
              >
                Sort By Relevance
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                onClick={this.highToLowClick}
                >
                  High-Low
                </MenuItem>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.lowToHighClick}
                >
                  Low-High
                </MenuItem>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.sortArrivalClick}
                >
                  Newest Arrival
                </MenuItem>
              </Menu>
            </React.Fragment>
            
          )}
        </PopupState>
      </div>
    );
  }
}

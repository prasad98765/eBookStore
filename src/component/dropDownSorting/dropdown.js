import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
var APIcall = require("../../congfiguration/BookStoreCallAPI");

export default class MenuPopupState extends Component {
  constructor(props) {
    super(props);
  }

  highToLowClick = event => {
    APIcall.getSortHighToLow().then(res => {
      console.log(res.data.data[0]);
      this.setState({});
    });
  };

  lowToHighClick = event => {
    APIcall.getSortLowToHigh().then(res => {
      console.log(res.data.data[0]);
      this.setState({});
    });
  };

  sortArrivalClick = event => {
    APIcall.getSortByArrival().then(res => {
      console.log(res.data.data[0]);
      this.setState({});
    });
  };

  render() {
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
